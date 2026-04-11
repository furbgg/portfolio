import re
from bs4 import BeautifulSoup
import os

langs = ['tr', 'en', 'de']
files = [
    'public/t-pakett/pitch-system.html',
    'public/t-pakett/pitch-system-en.html',
    'public/t-pakett/pitch-system-de.html'
]

htmls = []
for f in files:
    with open(f, 'r', encoding='utf-8') as file:
        htmls.append(file.read())

soups = [BeautifulSoup(h, 'html.parser') for h in htmls]

tr_soup = soups[0]
en_soup = soups[1]
de_soup = soups[2]

# The structure is mostly the same. We can manually create the React component since there are only 6 slides.
# It's safer to just output the text mappings.

def extract_text(soup):
    texts = []
    for tag in soup.find_all(string=True):
        if tag.parent.name not in ['script', 'style', 'head', 'title', 'meta', '[document]']:
            text = tag.strip()
            if text:
                texts.append((tag, text))
    return texts

tr_texts = extract_text(tr_soup)
en_texts = extract_text(en_soup)
de_texts = extract_text(de_soup)

print(f"TR length: {len(tr_texts)}")
print(f"EN length: {len(en_texts)}")
print(f"DE length: {len(de_texts)}")
