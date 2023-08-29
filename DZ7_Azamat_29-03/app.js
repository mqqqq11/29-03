let buttonAnswer = document.querySelectorAll('.buttonAnswer')
let answer = document.querySelectorAll('.answer')

for (let i = 0; i < buttonAnswer.length; i++) {
    buttonAnswer[i].onclick = () => {
        if (answer[i].style.display === 'none') {
            answer[i].style.display = 'block'
            buttonAnswer[i].style.background = 'red'
            buttonAnswer[i].textContent = 'Скрыть ответ'
        }else {
            answer[i].style.display = 'none'
            buttonAnswer[i].style.background = 'green'
            buttonAnswer[i].textContent = 'Показать ответ'
        }
    }
}

