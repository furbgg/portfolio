const fs = require('fs');

const langs = ['tr', 'en', 'de'];
const files = [
    'public/t-pakett/pitch-system.html',
    'public/t-pakett/pitch-system-en.html',
    'public/t-pakett/pitch-system-de.html'
];

let htmls = files.map(f => fs.readFileSync(f, 'utf8'));

// We can just output the HTML of one of them and instruct the user to use it.
// Actually, no, let me just build the React component by merging the texts!

// It's easier to just write it manually by looking at the HTML.
