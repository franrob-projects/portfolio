import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin
import os

# Target URL
url = "https://didierlopes.com"

# Create directory for CSS files
os.makedirs("scraped_css", exist_ok=True)

# 1. Fetch the HTML
response = requests.get(url)
soup = BeautifulSoup(response.text, "html.parser")

# 2. Find all CSS links
css_links = []
for link in soup.find_all("link", rel="stylesheet"):
    if link.get('href'):
        css_links.append(link['href'])

print(f"Found {len(css_links)} CSS files:")
for link in css_links:
    print(f"  - {link}")

# 3. Download each file
for i, link in enumerate(css_links):
    # Handle relative URLs (e.g., "/styles/main.css")
    full_url = urljoin(url, link)
    
    try:
        css_response = requests.get(full_url)
        filename = f"scraped_css/style_{i}_{full_url.split('/')[-1]}" or f"scraped_css/style_{i}.css"
        
        # Save to file
        with open(filename, "w", encoding="utf-8") as f:
            f.write(css_response.text)
        print(f"Downloaded: {filename}")
        
    except Exception as e:
        print(f"Failed to download {full_url}: {e}")

# Also extract inline styles
print("\nExtracting inline styles...")
inline_styles = []
for style_tag in soup.find_all("style"):
    if style_tag.string:
        inline_styles.append(style_tag.string)

if inline_styles:
    with open("scraped_css/inline_styles.css", "w", encoding="utf-8") as f:
        f.write("\n\n/* ===== INLINE STYLES ===== */\n\n".join(inline_styles))
    print("Saved inline styles to scraped_css/inline_styles.css")

print(f"\nScraping complete! Check the 'scraped_css' directory.")