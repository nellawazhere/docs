# WordPress Markdown Cleaner Guide

This guide explains how to use the `wp_md_cleaner.py` script to clean WordPress markup from Markdown files and process images for the Broadstripes documentation site.

## Overview

The `wp_md_cleaner.py` script performs the following tasks:
1. Cleans WordPress-specific markup from Markdown files
2. Processes and copies images to the appropriate directory
3. Updates image references in the Markdown content
4. Preserves and reformats YAML frontmatter

## Prerequisites

- Python 3.6 or higher
- Virtual environment (already set up in `wordpress-pull/venv`)

## Step-by-Step Guide

### 1. Activate the Python Virtual Environment

#### On Windows (PowerShell):

There are two ways to activate the virtual environment:

**Option 1: Direct Activation (Recommended)**

```powershell
# Navigate to the broadstripes-docs directory
cd c:\Users\honel\Broadstripes\Helpsite\broadstripes-help-center\broadstripes-docs

# Activate the virtual environment
.\wordpress-pull\venv\Scripts\Activate.ps1
```

If you encounter permission issues, you might need to adjust the execution policy:

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope Process
.\wordpress-pull\venv\Scripts\Activate.ps1
```

**Option 2: Using Python Executable from Virtual Environment**

Alternatively, you can directly use the Python executable from the virtual environment without activating it:

```powershell
# Navigate to the wordpress-pull directory
cd c:\Users\honel\Broadstripes\Helpsite\broadstripes-help-center\broadstripes-docs\wordpress-pull

# Run the script using the Python executable from the virtual environment
.\venv\Scripts\python.exe wp_md_cleaner.py <input_dir> <output_dir> <img_dir>
```

This approach uses the virtual environment's Python interpreter without having to explicitly activate it first.

Once activated using Option 1, your command prompt should show `(venv)` at the beginning of the line.

#### On Linux/macOS or Windows with Git Bash:

**Option 1: Direct Activation**

```bash
# Navigate to the broadstripes-docs directory
cd ~/Broadstripes/Helpsite/broadstripes-help-center/broadstripes-docs

# Activate the virtual environment
source ./wordpress-pull/venv/bin/activate
```

**Option 2: Using Python Executable from Virtual Environment**

```bash
# Navigate to the wordpress-pull directory
cd ~/Broadstripes/Helpsite/broadstripes-help-center/broadstripes-docs/wordpress-pull

# Run the script using the Python executable from the virtual environment
./venv/bin/python wp_md_cleaner.py <input_dir> <output_dir> <img_dir>
```

Once activated using Option 1, your terminal should show `(venv)` at the beginning of the prompt line.

### 2. Run the wp_md_cleaner Script

The script requires three arguments:
1. `input_dir`: Directory containing WordPress Markdown files
2. `output_dir`: Directory where cleaned Markdown files will be saved
3. `img_dir`: Directory where images will be copied

```bash
# Navigate to the wordpress-pull directory
cd wordpress-pull

# Run the script
python wp_md_cleaner.py <input_dir> <output_dir> <img_dir>
```

#### Example:

```bash
python wp_md_cleaner.py ./wordpress-export/post ./docs/getting-started ./static/img/getting-started
```

This command will:
- Process all Markdown files in `./wordpress-export/post`
- Save cleaned files to `./docs/getting-started`
- Copy and reference images in `./static/img/getting-started`

### 3. What the Script Does

For each Markdown file in the input directory, the script:

1. **Extracts and reformats frontmatter**:
   - Preserves title and sidebar_label
   - Removes WordPress-specific fields (date, categories, tags)

2. **Cleans WordPress markup**:
   - Removes Divi builder sections and shortcodes
   - Removes caption tags
   - Cleans up excessive whitespace

3. **Processes images**:
   - Locates images in various possible locations
   - Copies images to the specified image directory
   - Updates image references in the Markdown content to use the proper path format (`/img/getting-started/image-name.jpg`)

4. **Preserves directory structure**:
   - Maintains the same folder structure in the output directory as in the input directory

### 4. Deactivate the Virtual Environment

When you're done, deactivate the virtual environment:

```bash
deactivate
```

## Troubleshooting

### Missing Images

If you see warnings about missing images, check:
1. The image path in the original Markdown file
2. If the image exists in the WordPress export directory
3. Try running the script with different input directories that might contain the images

### Environment Activation Issues

If you can't activate the virtual environment:

1. Check if Python is installed and in your PATH
2. Try using the full path to the activation script:
   ```
   & "c:\Users\honel\Broadstripes\Helpsite\broadstripes-help-center\broadstripes-docs\wordpress-pull\venv\Scripts\Activate.ps1"
   ```

3. If the virtual environment is corrupted, you can recreate it:
   ```
   cd wordpress-pull
   python -m venv venv
   .\venv\Scripts\Activate.ps1
   pip install pyyaml
   ```

## Example Workflow

1. Export content from WordPress
2. Place exported Markdown files in `wordpress-export/post` or `wordpress-export/page`
3. Activate the virtual environment
4. Run the cleaner script
5. Review the cleaned Markdown files in the output directory
6. Make any necessary manual adjustments
7. Build the Docusaurus site to verify the results
