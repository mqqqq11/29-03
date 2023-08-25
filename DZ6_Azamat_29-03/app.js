//1
let todo_list_input = document.querySelector('.todo_list_input');
let todo_list_container = document.querySelector('.todo_list_container');
let todo_list_add = document.querySelector('.todo_list_add');
let todo_list_remove = document.querySelector('.todo_list_remove');

todo_list_add.addEventListener('click', () => {
    if (todo_list_input.value.trim() === '') {
        alert('Ошибка! Введите текст задачи.');
    } else {
        let todoItem = document.createElement('div');
        todoItem.className = 'todo_item';

        let todoText = document.createElement('span');
        todoText.textContent = todo_list_input.value;

        todoItem.appendChild(todoText);

        todo_list_container.appendChild(todoItem);

        todo_list_input.value = '';
    }
});

todo_list_remove.addEventListener('click', () => {
    todo_list_container.innerHTML = '';
});


//2 
let books = ['nig', 'Неуютная ферма', 'Некрологи', 'книга', 'lorem4', 'ния'];
function bookFunc(bookArray) {
    let result = [];

    for (let book of bookArray) {
        if (book[0] === 'Н' || book[0] === 'н') {
            result.push(book);
        }
    }
    return result;
}
console.log(bookFunc(books));