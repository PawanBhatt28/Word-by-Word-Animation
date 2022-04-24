let s = prompt('Sentence : ');
let chars = [];

for (let i = 0; i < s.length; i++) {
    chars.push(s[i]);
}

let p = document.getElementById('pp');
let div = document.getElementById('box');

let ind = 0;
function rgb(r, g, b) {
    return ['rgb(', r, ',', g, ',', b, ')'].join('');
}
setInterval(() => {
    let r = Math.random() * 256;
    let g = Math.random() * 256;
    let b = Math.random() * 256;
    let color = rgb(r, g, b);

    p.style.color = color;
    div.style.borderColor = 'pink';

    console.log(div);
    if (ind < chars.length) {
        p.textContent += chars[ind];
    }

    ind++;
}, 450);
