import os
import re
import shutil
from pathlib import Path
import argparse
import yaml

def extract_frontmatter(content):
    """Extract and parse YAML frontmatter from markdown content"""
    frontmatter_match = re.match(r'^---\n(.*?)\n---\n*(.*)', content, re.DOTALL)
    if frontmatter_match:
        try:
            frontmatter = yaml.safe_load(frontmatter_match.group(1))
            content = frontmatter_match.group(2)
            
            # Convert WordPress frontmatter to Docusaurus format
            if 'title' in frontmatter:
                # Use title as sidebar_label if not already set
                if 'sidebar_label' not in frontmatter:
                    frontmatter['sidebar_label'] = frontmatter['title']
            
            # Remove WordPress specific fields
            keys_to_remove = ['date', 'categories', 'tags']
            for key in keys_to_remove:
                frontmatter.pop(key, None)
            
            return frontmatter, content
        except yaml.YAMLError:
            return {}, content
    return {}, content

def clean_wordpress_markup(content):
    # Remove individual WordPress/Divi shortcode tags (but preserve content between them)
    divi_patterns = [
        # Individual opening and closing tags (with escaped brackets and underscores)
        r'\\?\[et\\?_pb\\?_section[^\]]*?\\?\]',
        r'\\?\[/et\\?_pb\\?_section\\?\]',
        r'\\?\[et\\?_pb\\?_row[^\]]*?\\?\]',
        r'\\?\[/et\\?_pb\\?_row\\?\]',
        r'\\?\[et\\?_pb\\?_column[^\]]*?\\?\]',
        r'\\?\[/et\\?_pb\\?_column\\?\]',
        r'\\?\[et\\?_pb\\?_text[^\]]*?\\?\]',
        r'\\?\[/et\\?_pb\\?_text\\?\]',
        # Any other et_pb_ tags
        r'\\?\[et\\?_pb\\?_\w+[^\]]*?\\?\]',
        r'\\?\[/et\\?_pb\\?_\w+\\?\]',
        # Any remaining shortcode-style tags with WordPress attributes
        r'\\?\[[^\]]*?(?:background\\?_position|background\\?_repeat|background\\?_size|\\?_builder\\?_version|background\\?_layout)[^\]]*?\\?\]'
    ]
    
    cleaned_content = content
    for pattern in divi_patterns:
        cleaned_content = re.sub(
            pattern,
            '',
            cleaned_content,
            flags=re.DOTALL | re.IGNORECASE | re.MULTILINE
        )
    
    # Remove WordPress caption tags (handle escaped brackets)
    caption_pattern = r'\\?\[caption[^\]]*?\\?\](.*?)\\?\[/caption\\?\]'
    def replace_caption(match):
        return match.group(1).strip()
    cleaned_content = re.sub(caption_pattern, replace_caption, cleaned_content)
    
    # Clean up multiple newlines and spaces
    cleaned_content = re.sub(r'\n\s*\n\s*\n', '\n\n', cleaned_content)
    cleaned_content = '\n'.join(line.rstrip() for line in cleaned_content.splitlines())
    
    # Remove lines that are WordPress shortcode remnants (but preserve legitimate markdown)
    cleaned_lines = []
    for line in cleaned_content.splitlines():
        stripped = line.strip()
        # Skip empty lines or whitespace-only lines
        if not stripped:
            cleaned_lines.append(line)
            continue
            
        # Only remove lines that are clearly WordPress shortcode remnants
        # These typically contain specific WordPress/Divi attributes
        wordpress_indicators = [
            'background_position', 'background\\?_position', 'background\\_position',
            'background_repeat', 'background\\?_repeat', 'background\\_repeat',
            'background_size', 'background\\?_size', 'background\\_size',
            '_builder_version', '\\?_builder\\?_version', '\\_builder\\_version',
            'background_layout', 'background\\?_layout', 'background\\_layout',
            'admin_label', 'admin\\?_label', 'admin\\_label',
            'fb_built', 'fb\\?_built', 'fb\\_built',
            'bb_built', 'bb\\?_built', 'bb\\_built',
            'et_pb_', 'et\\?_pb\\?_', 'et\\_pb\\_',
            'custom_padding', 'custom\\?_padding', 'custom\\_padding',
            'custom_margin', 'custom\\?_margin', 'custom\\_margin',
            'module_class', 'module\\?_class', 'module\\_class',
            'module_id', 'module\\?_id', 'module\\_id'
        ]
        
        # Check if line contains WordPress-specific patterns
        is_wordpress_junk = False
        if (stripped.startswith('[') and stripped.endswith(']')) or (stripped.startswith('\\[') and stripped.endswith('\\]')):
            # Only remove if it contains WordPress-specific attributes
            is_wordpress_junk = any(indicator in stripped for indicator in wordpress_indicators)
        
        # Keep the line unless it's identified as WordPress junk
        if not is_wordpress_junk:
            cleaned_lines.append(line)
    
    # Join lines back together
    cleaned_content = '\n'.join(cleaned_lines)
    
    # Final cleanup
    cleaned_content = cleaned_content.strip()
    
    return cleaned_content

def find_image(img_path, src_dir):
    """Search for image in multiple possible locations"""
    # Clean up the image path first
    img_filename = os.path.basename(img_path)
    
    possible_locations = [
        os.path.join(src_dir, 'images', img_path),
        os.path.join(src_dir, img_path),
        os.path.join(src_dir, 'images', img_filename),  # Try just the filename in images/
        os.path.join(src_dir, img_filename),  # Try just the filename
        os.path.join(os.path.dirname(src_dir), 'page', 'images', img_path),
        os.path.join(os.path.dirname(src_dir), 'post', 'images', img_path),
        os.path.join(os.path.dirname(src_dir), 'page', 'images', img_filename),
        os.path.join(os.path.dirname(src_dir), 'post', 'images', img_filename)
    ]
    
    for location in possible_locations:
        if os.path.exists(location):
            return location
    return None

def process_images(content, src_dir, img_dir, subdir, img_path_prefix):
    """Process and move images, updating their references in the content"""
    # Find all image references in markdown, including those in figure tags
    img_pattern = r'!\[([^\]]*)\]\s*\(([^)]+)\)'
    images = re.findall(img_pattern, content)
    
    for alt_text, img_path in images:
        # Clean up the image path
        img_path = img_path.strip()
        if img_path.startswith('images/'):
            img_path = img_path[7:]  # Remove 'images/' prefix
        
        # Get the image filename without any parent directories
        img_filename = os.path.basename(img_path)
        
        # Find the image in possible locations
        src_img_path = find_image(img_path, src_dir)
        
        # Destination image path (without nested subdirectory)
        dest_img_path = os.path.join(img_dir, img_filename)
        
        # Copy image if it exists
        if src_img_path and os.path.exists(src_img_path):
            os.makedirs(os.path.dirname(dest_img_path), exist_ok=True)
            shutil.copy2(src_img_path, dest_img_path)
            print(f"Copied image: {src_img_path} -> {dest_img_path}")
            
            # Update the image reference in the content to use configurable prefix
            new_img_path = f'{img_path_prefix}/{img_filename}'
            
            # Handle different variations of the image path in the content
            variations = [
                img_path,                    # Original path
                f'images/{img_path}',        # With images/ prefix
                img_filename,                # Just filename
                f'images/{img_filename}'     # images/ prefix with filename
            ]
            
            for variation in variations:
                # Escape special characters in the path
                escaped_path = re.escape(variation)
                # Replace the path, handling optional spaces after ]
                content = re.sub(
                    r'!\[([^\]]*)\]\s*\(' + escaped_path + r'\)',
                    f'![\\1]({new_img_path})',
                    content
                )
        else:
            print(f"Warning: Image not found: {img_path}")
            print("Searched in:")
            for loc in [
                os.path.join(src_dir, 'images', img_path),
                os.path.join(src_dir, img_path),
                os.path.join(os.path.dirname(src_dir), 'page', 'images', img_path),
                os.path.join(os.path.dirname(src_dir), 'post', 'images', img_path)
            ]:
                print(f"  - {loc}")
    
    return content

def process_markdown_file(input_file, output_file, img_dir, img_path_prefix):
    src_dir = os.path.dirname(input_file)
    subdir = os.path.basename(os.path.dirname(output_file))
    
    with open(input_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Extract frontmatter
    frontmatter, content = extract_frontmatter(content)
    
    # Clean WordPress markup
    content = clean_wordpress_markup(content)
    
    # Process and copy images
    content = process_images(content, src_dir, img_dir, subdir, img_path_prefix)
    
    # Create output directory if it doesn't exist
    os.makedirs(os.path.dirname(output_file), exist_ok=True)
    
    # Write cleaned content with preserved frontmatter
    with open(output_file, 'w', encoding='utf-8') as f:
        if frontmatter:
            f.write('---\n')
            yaml.dump(frontmatter, f, allow_unicode=True, sort_keys=False)
            f.write('---\n\n')
        f.write(content)
        print(f"Processed: {output_file}")

def main():
    parser = argparse.ArgumentParser(description='Clean WordPress markup from Markdown files and process images')
    parser.add_argument('input_dir', help='Input directory containing markdown files')
    parser.add_argument('output_dir', help='Output directory for cleaned markdown files')
    parser.add_argument('img_dir', help='Directory for storing images')
    parser.add_argument('--img-path-prefix', default='/img/getting-started', help='Prefix for image paths in markdown files')
    
    args = parser.parse_args()
    
    # Create output and image directories
    os.makedirs(args.output_dir, exist_ok=True)
    os.makedirs(args.img_dir, exist_ok=True)
    
    # Process all markdown files
    for root, _, files in os.walk(args.input_dir):
        for file in files:
            if file.endswith('.md'):
                input_path = os.path.join(root, file)
                
                # Preserve directory structure in output
                rel_path = os.path.relpath(input_path, args.input_dir)
                output_path = os.path.join(args.output_dir, rel_path)
                
                print(f"Processing: {rel_path}")
                process_markdown_file(input_path, output_path, args.img_dir, args.img_path_prefix)

if __name__ == '__main__':
    main()