const fs = require('fs');

function htmlToJsx(htmlStr, pageClass) {
    let jsx = htmlStr;

    // React attributes
    jsx = jsx.replace(/class="/g, 'className="');
    jsx = jsx.replace(/for="/g, 'htmlFor="');
    
    // SVG attributes (basic to camelCase)
    jsx = jsx.replace(/stroke-linecap="/g, 'strokeLinecap="');
    jsx = jsx.replace(/stroke-linejoin="/g, 'strokeLinejoin="');
    jsx = jsx.replace(/stroke-width="/g, 'strokeWidth="');

    // Self close tags
    jsx = jsx.replace(/<(img|br|hr|input|meta|link)([^>]*?)(>)/g, (match, tag, rest) => {
        if (rest.trim().endsWith('/')) return match;
        return `<${tag}${rest} />`;
    });

    // Convert inline style
    jsx = jsx.replace(/style="([^"]*)"/g, (match, styles) => {
        let parts = [];
        styles.split(';').forEach(prop => {
            if (!prop.trim() || !prop.includes(':')) return;
            let [k, ...v] = prop.split(':');
            k = k.trim();
            v = v.join(':').trim().replace(/'/g, '"');
            let kCamel = k.replace(/-([a-z])/g, g => g[1].toUpperCase());
            parts.push(`${kCamel}: '${v}'`);
        });
        return `style={{${parts.join(', ')}}}`;
    });

    // Extract body
    const bodyMatch = jsx.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    if (bodyMatch) {
        jsx = bodyMatch[1];
    }

    // Remove scripts
    jsx = jsx.replace(/<script[\s\S]*?<\/script>/g, '');
    
    // Remove comments
    jsx = jsx.replace(/<!--([\s\S]*?)-->/g, '{/* $1 */}');

    return jsx;
}

function processFile(inPath, outPath, componentName, pageClass, brandPrefix) {
    const content = fs.readFileSync(inPath, 'utf8');
    let jsx = htmlToJsx(content, pageClass);

    jsx = jsx.replace(/bg-brand-/g, `bg-${brandPrefix}-brand-`);
    jsx = jsx.replace(/text-brand-/g, `text-${brandPrefix}-brand-`);
    jsx = jsx.replace(/border-brand-/g, `border-${brandPrefix}-brand-`);
    jsx = jsx.replace(/from-brand-/g, `from-${brandPrefix}-brand-`);
    jsx = jsx.replace(/to-brand-/g, `to-${brandPrefix}-brand-`);

    // Whatsapp hook mapping
    // We replace the Whatsapp and Email links with onClick handlers
    jsx = jsx.replace(/href="https:\/\/wa\.me[^"]*"/g, 'onClick={handleWhatsApp} href="#"');
    jsx = jsx.replace(/href="mailto:[^"]*"/g, 'href="mailto:furkanbgunaydin@gmail.com"');

    const template = `import React, { useEffect } from 'react';

export default function ${componentName}() {
    useEffect(() => {
        const dots = document.querySelectorAll('.${pageClass} .nav-dot');
        const sections = document.querySelectorAll('.${pageClass} .slide');

        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const currentId = entry.target.getAttribute('id');
                    dots.forEach(dot => {
                        const dotElement = dot as HTMLElement;
                        if(dot.getAttribute('href') === '#' + currentId) {
                            dotElement.style.background = '${brandPrefix === "b" ? "#e8d5d1" : "#b4975a"}';
                        } else {
                            dotElement.style.background = '${brandPrefix === "b" ? "rgba(45,55,72,0.1)" : "rgba(255,255,255,0.2)"}';
                        }
                    });
                }
            });
        }, observerOptions);

        sections.forEach(sec => observer.observe(sec));
        return () => observer.disconnect();
    }, []);

    const handleWhatsApp = (e: React.MouseEvent) => {
        e.preventDefault();
        const number = '+436764732159';
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        
        if (isMobile) {
            window.open('https://wa.me/436764732159', '_blank');
        } else {
            navigator.clipboard.writeText(number).then(() => {
                alert('Numara kopyalandı: ' + number);
            });
        }
    };

    return (
        <div className="${pageClass}">
            <div className="custom-nav-dots hidden md:flex">
                <a href="#slide-1" className="nav-dot" title="Giriş"></a>
                <a href="#slide-2" className="nav-dot" title="2"></a>
                <a href="#slide-3" className="nav-dot" title="3"></a>
                <a href="#slide-4" className="nav-dot" title="4"></a>
                <a href="#slide-5" className="nav-dot" title="5"></a>
                <a href="#slide-6" className="nav-dot" title="6"></a>
            </div>
            ${jsx}
        </div>
    );
}
`;

    // A small fix to remove the old manual nav-dots from the original JSX since we injected scoped ones
    let cleanTemplate = template.replace(/<div className="nav-dots hidden md:flex">[\s\S]*?<\/div>/, '');

    fs.writeFileSync(outPath, cleanTemplate, 'utf8');
}

try {
    processFile(
        'c:/Users/furbg/Desktop/portfolio/public/b-pakett/pitch-boutique.html',
        'c:/Users/furbg/Desktop/portfolio/src/components/pages/BDetails.tsx',
        'BDetails', 'b-details-page', 'b'
    );
    processFile(
        'c:/Users/furbg/Desktop/portfolio/public/m-pakett/pitch-presentation-v2.html',
        'c:/Users/furbg/Desktop/portfolio/src/components/pages/MDetails.tsx',
        'MDetails', 'm-details-page', 'm'
    );
    console.log("Done");
} catch(e) {
    console.error(e);
}
