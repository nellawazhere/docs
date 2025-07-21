#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Migration script for Docusaurus to Mintlify
function convertDocusaurusToMintlify(docsDir) {
  console.log('Starting Docusaurus to Mintlify migration...');
  
  function processFile(filePath) {
    if (!filePath.endsWith('.md') && !filePath.endsWith('.mdx')) return;
    
    console.log(`Processing: ${filePath}`);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Convert Docusaurus admonitions to Mintlify format
    content = content.replace(/:::note\s*(.*?)\n([\s\S]*?):::/g, '<Note>\n$2</Note>');
    content = content.replace(/:::warning\s*(.*?)\n([\s\S]*?):::/g, '<Warning>\n$2</Warning>');
    content = content.replace(/:::tip\s*(.*?)\n([\s\S]*?):::/g, '<Tip>\n$2</Tip>');
    content = content.replace(/:::info\s*(.*?)\n([\s\S]*?):::/g, '<Info>\n$2</Info>');
    
    // Remove Docusaurus imports
    content = content.replace(/^import.*from.*$/gm, '');
    
    // Update image paths (if needed)
    content = content.replace(/!\[([^\]]*)\]\(\/img\//g, '![$1](/images/');
    
    // Clean up extra whitespace
    content = content.replace(/\n\n\n+/g, '\n\n');
    
    fs.writeFileSync(filePath, content);
  }
  
  function walkDir(dir) {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        walkDir(filePath);
      } else {
        processFile(filePath);
      }
    });
  }
  
  walkDir(docsDir);
  console.log('Migration complete!');
}

// Run the migration
const docsPath = './docs';
if (fs.existsSync(docsPath)) {
  convertDocusaurusToMintlify(docsPath);
} else {
  console.error('docs directory not found!');
}
