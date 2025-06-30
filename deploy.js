// deploy.js - A script to handle Docusaurus deployment to GitHub Pages
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const os = require('os');

// Configuration from docusaurus.config.js
const organizationName = 'broadstripes';
const projectName = 'broadstripes-docs';
const deployBranch = 'gh-pages';

// Paths
const buildDir = path.join(__dirname, 'build');
const tempDir = path.join(__dirname, '.temp-deploy');

// Colors for console output
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  red: '\x1b[31m'
};

// Helper function to run commands and log output
function runCommand(command, options = {}) {
  console.log(`${colors.blue}[INFO]${colors.reset} Running: ${command}`);
  try {
    return execSync(command, { 
      stdio: 'inherit',
      ...options
    });
  } catch (error) {
    console.error(`${colors.red}[ERROR]${colors.reset} Command failed: ${command}`);
    throw error;
  }
}

// Helper function to copy directory recursively
function copyDirectory(source, destination) {
  // Create destination directory if it doesn't exist
  if (!fs.existsSync(destination)) {
    fs.mkdirSync(destination, { recursive: true });
  }

  // Get all files and directories in source
  const entries = fs.readdirSync(source, { withFileTypes: true });

  // Copy each entry
  for (const entry of entries) {
    const srcPath = path.join(source, entry.name);
    const destPath = path.join(destination, entry.name);

    if (entry.isDirectory()) {
      // Recursively copy directory
      copyDirectory(srcPath, destPath);
    } else {
      // Copy file
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// Main deployment function
async function deploy() {
  try {
    // Step 1: Build the website
    console.log(`${colors.green}[STEP 1]${colors.reset} Building the website...`);
    runCommand('npm run build');
    
    // Step 2: Create and prepare temporary directory
    console.log(`${colors.green}[STEP 2]${colors.reset} Preparing deployment...`);
    if (fs.existsSync(tempDir)) {
      fs.rmSync(tempDir, { recursive: true, force: true });
    }
    fs.mkdirSync(tempDir, { recursive: true });
    
    // Step 3: Copy build files to temp directory
    console.log(`${colors.green}[STEP 3]${colors.reset} Copying build files...`);
    copyDirectory(buildDir, tempDir);
    
    // Step 4: Initialize git in the temp directory
    console.log(`${colors.green}[STEP 4]${colors.reset} Initializing git repository...`);
    process.chdir(tempDir);
    
    // Different git init syntax depending on git version
    try {
      runCommand('git init -b main');
    } catch (error) {
      // Fallback for older git versions
      runCommand('git init');
      runCommand('git checkout -b main');
    }
    
    runCommand('git config user.name "GitHub Actions"');
    runCommand('git config user.email "actions@github.com"');
    
    // Step 5: Add and commit files
    console.log(`${colors.green}[STEP 5]${colors.reset} Committing files...`);
    runCommand('git add .');
    runCommand('git commit -m "Deploy website"');
    
    // Step 6: Push to GitHub Pages
    console.log(`${colors.green}[STEP 6]${colors.reset} Pushing to GitHub Pages...`);
    const repoUrl = process.env.USE_SSH 
      ? `git@github.com:${organizationName}/${projectName}.git`
      : `https://github.com/${organizationName}/${projectName}.git`;
      
    runCommand(`git remote add origin ${repoUrl}`);
    runCommand(`git push --force origin main:${deployBranch}`);
    
    // Step 7: Cleanup
    console.log(`${colors.green}[STEP 7]${colors.reset} Cleaning up...`);
    process.chdir(__dirname);
    fs.rmSync(tempDir, { recursive: true, force: true });
    
    console.log(`${colors.green}[SUCCESS]${colors.reset} Deployment completed successfully!`);
    console.log(`${colors.yellow}[INFO]${colors.reset} Website is now available at: https://${organizationName}.github.io/${projectName}/`);
  } catch (error) {
    console.error(`${colors.red}[ERROR]${colors.reset} Deployment failed: ${error.message}`);
    process.exit(1);
  }
}

// Run the deployment
deploy();
