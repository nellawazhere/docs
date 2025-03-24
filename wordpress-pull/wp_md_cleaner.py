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
    # First remove all content between outermost et_pb_section tags
    cleaned_content = re.sub(
        r'\[et_pb_section[^\]]*?\].*?\[/et_pb_section\]',
        '',
        content,
        flags=re.DOTALL | re.IGNORECASE | re.MULTILINE
    )
    
    # If no sections found (or content wasn't in sections), try removing individual tags
    divi_patterns = [
        # Handle both fb_built and bb_built variations
        r'\[et_pb_section[^\]]*?(?:fb_built|bb_built)[^\]]*?\].*?\[/et_pb_section\]',
        r'\[et_pb_row[^\]]*?\].*?\[/et_pb_row\]',
        r'\[et_pb_column[^\]]*?\].*?\[/et_pb_column\]',
        r'\[et_pb_text[^\]]*?\].*?\[/et_pb_text\]',
        # Individual opening and closing tags
        r'\[et_pb_\w+[^\]]*?\]',
        r'\[/et_pb_\w+\]',
        # Any remaining shortcode-style tags
        r'\[[^\]]*?(?:background_position|background_repeat|background_size|_builder_version|background_layout)[^\]]*?\]'
    ]
    
    for pattern in divi_patterns:
        cleaned_content = re.sub(
            pattern,
            '',
            cleaned_content,
            flags=re.DOTALL | re.IGNORECASE | re.MULTILINE
        )
    
    # Remove WordPress caption tags
    caption_pattern = r'\[caption[^\]]*?\](.*?)\[/caption\]'
    def replace_caption(match):
        return match.group(1).strip()
    cleaned_content = re.sub(caption_pattern, replace_caption, cleaned_content)
    
    # Clean up multiple newlines and spaces
    cleaned_content = re.sub(r'\n\s*\n\s*\n', '\n\n', cleaned_content)
    cleaned_content = '\n'.join(line.rstrip() for line in cleaned_content.splitlines())
    
    # Remove any lines that are just whitespace or empty brackets
    cleaned_lines = []
    for line in cleaned_content.splitlines():
        stripped = line.strip()
        if stripped and not stripped.startswith('[') and not stripped.endswith(']'):
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

def process_images(content, src_dir, img_dir, subdir):
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
            
            # Update the image reference in the content to use /img/getting-started prefix
            new_img_path = f'/img/getting-started/{img_filename}'
            
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

def process_markdown_file(input_file, output_file, img_dir):
    src_dir = os.path.dirname(input_file)
    subdir = os.path.basename(os.path.dirname(output_file))
    
    with open(input_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Extract frontmatter
    frontmatter, content = extract_frontmatter(content)
    
    # Clean WordPress markup
    content = clean_wordpress_markup(content)
    
    # Process and copy images
    content = process_images(content, src_dir, img_dir, subdir)
    
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
                process_markdown_file(input_path, output_path, args.img_dir)

if __name__ == '__main__':
    main()