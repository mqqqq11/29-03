let block = document.querySelector('.block');
let text = document.querySelector('.text');

function random() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    } 
    return color;
}

block.onclick = () => {
    let randomColor = random();
    block.style.backgroundColor = randomColor;
    text.textContent = randomColor;
};