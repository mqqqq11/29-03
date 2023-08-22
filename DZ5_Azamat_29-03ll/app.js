//1
let plus = document.querySelector('.plus').onclick = () => {
    let input = document.querySelector('.input');   
    let value = input.value
    input.value = parseInt(value) + 1;
}

let minus = document.querySelector('.minus').onclick = () => {
    let input = document.querySelector('.input')
    let value = input.value
    if (value > input.min) {
        input.value = parseInt(value) - 1;
    }
}
//2
document.querySelector('.numPlus').onclick = () => {
    const num1 = (document.querySelector('.num1').value)
    const num2 = (document.querySelector('.num2').value)
    document.querySelector('.result').value = parseFloat(num1) + parseFloat(num2)
}

document.querySelector('.numMinus').onclick = () => {
    const num1 = (document.querySelector('.num1').value)
    const num2 = (document.querySelector('.num2').value)
    document.querySelector('.result').value = parseFloat(num1) - parseFloat(num2)
}

document.querySelector('.numMul').onclick = () => {
    const num1 = (document.querySelector('.num1').value)
    const num2 = (document.querySelector('.num2').value)
    document.querySelector('.result').value = parseFloat(num1) * parseFloat(num2)
}

document.querySelector('.numDelen').onclick = () => {
    const num1 = (document.querySelector('.num1').value)
    const num2 = (document.querySelector('.num2').value)
    document.querySelector('.result').value = parseFloat(num1) / parseFloat(num2)
}

//3
let show = ''
let displayText = document.querySelector('.displayText')
let showText = document.querySelector('.showText').onclick = () => {
    let showPromt = prompt('введите текст: ')
    if (showPromt !== null) {
        show = showPromt
        displayText.textContent = show
    }
}