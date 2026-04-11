import re
import os

def html_to_jsx(html_str, page_class):
    # Basic replacements
    jsx = html_str.replace('class="', 'className="')
    jsx = jsx.replace('for="', 'htmlFor="')
    
    # Self close tags
    jsx = re.sub(r'<(img|br|hr|input|meta|link)([^>]*?)(/?)>', r'<\1\2 />', jsx)
    jsx = jsx.replace(' /> />', ' />') # cleanup double closing

    # Convert style string to dict
    def style_replacer(match):
        attributes = match.group(1)
        # simplistic: just split by ;
        parts = []
        for prop in attributes.split(';'):
            prop = prop.strip()
            if not prop: continue
            if ':' not in prop: continue
            k, v = prop.split(':', 1)
            k = k.strip()
            v = v.strip().replace("'", '"')
            
            # camelCase key
            parts_k = k.split('-')
            k_camel = parts_k[0] + ''.join(x.capitalize() for x in parts_k[1:])
            parts.append(f'{k_camel}: \'{v}\'')
            
        return "style={{" + ', '.join(parts) + "}}"

    jsx = re.sub(r'style="([^"]*)"', style_replacer, jsx)

    # Change component wrapper
    # Remove DOCTYPE, html, head, script
    body_match = re.search(r'<body[^>]*>(.*?)</body>', jsx, re.DOTALL | re.IGNORECASE)
    if body_match:
        jsx = body_match.group(1)

    # Remove script tags
    jsx = re.sub(r'<script.*?>.*?</script>', '', jsx, flags=re.DOTALL)
    
    # Remove HTML comments
    jsx = re.sub(r'<!--(.*?)-->', r'{/* \1 */}', jsx, flags=re.DOTALL)

    return jsx

def process_file(in_path, out_path, component_name, page_class, brand_prefix):
    with open(in_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    jsx = html_to_jsx(content, page_class)
    
    # prefix colors
    jsx = re.sub(r'bg-brand-', f'bg-{brand_prefix}-brand-', jsx)
    jsx = re.sub(r'text-brand-', f'text-{brand_prefix}-brand-', jsx)
    jsx = re.sub(r'border-brand-', f'border-{brand_prefix}-brand-', jsx)
    jsx = re.sub(r'from-brand-', f'from-{brand_prefix}-brand-', jsx)
    jsx = re.sub(r'to-brand-', f'to-{brand_prefix}-brand-', jsx)

    template = f"""import React, {{ useEffect }} from 'react';

export default function {component_name}() {{
    useEffect(() => {{
        const dots = document.querySelectorAll('.nav-dot');
        const sections = document.querySelectorAll('.slide');

        const observerOptions = {{
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        }};

        const observer = new IntersectionObserver((entries) => {{
            entries.forEach(entry => {{
                if (entry.isIntersecting) {{
                    const currentId = entry.target.getAttribute('id');
                    dots.forEach(dot => {{
                        if(dot.getAttribute('href') === '#' + currentId) {{
                            dot.style.background = '{brand_prefix == "b" and "#e8d5d1" or "#b4975a"}';
                        }} else {{
                            dot.style.background = '{brand_prefix == "b" and "rgba(45,55,72,0.1)" or "rgba(255,255,255,0.2)"}';
                        }}
                    }});
                }}
            }});
        }}, observerOptions);

        sections.forEach(sec => observer.observe(sec));
        
        return () => observer.disconnect();
    }}, []);

    const handleWhatsApp = (e: React.MouseEvent) => {{
        e.preventDefault();
        const number = '+436764732159';
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        
        if (isMobile) {{
            window.open('https://wa.me/436764732159', '_blank');
        }} else {{
            navigator.clipboard.writeText(number).then(() => {{
                alert('Numara kopyalandı: ' + number);
            }});
        }}
    }};

    return (
        <div className="{page_class}">
            {jsx}
        </div>
    );
}}
"""

    with open(out_path, 'w', encoding='utf-8') as f:
        f.write(template)

b_in = 'c:/Users/furbg/Desktop/portfolio/public/b-pakett/pitch-boutique.html'
b_out = 'c:/Users/furbg/Desktop/portfolio/src/components/pages/BDetails.tsx'
process_file(b_in, b_out, 'BDetails', 'b-details-page', 'b')

m_in = 'c:/Users/furbg/Desktop/portfolio/public/m-pakett/pitch-presentation-v2.html'
m_out = 'c:/Users/furbg/Desktop/portfolio/src/components/pages/MDetails.tsx'
process_file(m_in, m_out, 'MDetails', 'm-details-page', 'm')
