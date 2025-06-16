#!/usr/bin/env python3
"""
Simple test to check if Chrome WebDriver works
"""

from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from webdriver_manager.chrome import ChromeDriverManager
import time

def test_browser():
    print("🧪 Testing Chrome WebDriver...")
    
    try:
        # Setup Chrome options
        chrome_options = Options()
        chrome_options.add_argument("--window-size=1200,800")
        
        # Use webdriver-manager to handle ChromeDriver
        print("📦 Setting up ChromeDriver...")
        service = Service(ChromeDriverManager().install())
        
        print("🚀 Starting Chrome browser...")
        driver = webdriver.Chrome(service=service, options=chrome_options)
        
        print("✅ Chrome browser opened successfully!")
        print("🌐 Navigating to Google...")
        driver.get("https://www.google.com")
        
        print("⏱️ Waiting 5 seconds...")
        time.sleep(5)
        
        print("📸 Taking a test screenshot...")
        driver.save_screenshot("test-screenshot.png")
        print("✅ Test screenshot saved as test-screenshot.png")
        
        print("🔚 Closing browser...")
        driver.quit()
        
        print("🎉 Browser test completed successfully!")
        return True
        
    except Exception as e:
        print(f"❌ Error: {e}")
        return False

if __name__ == "__main__":
    test_browser()
