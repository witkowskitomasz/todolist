let taskInput;
let addBtn;
let display;
let errorMsg

let taskArray = [];


const mainFunction = () => {
    loadDOMElements();
    loadDOMEvents();
    taskCheckDisplay(); 
}
const loadDOMElements = () => {
    taskInput = document.querySelector('.input-main');
    addBtn = document.querySelector('#add');
    display = document.querySelector('.display');
    errorMsg = document.querySelector('.display-msg');
}
const loadDOMEvents = () => {
    addBtn.addEventListener('click', addTask);
}

const taskCheckDisplay = () => (taskArray.length === 0) ? errorMsg.textContent = 'U dont have any tasks' : errorMsg.textContent = '';

const addTask = () => {
    if (taskInput.value === '') {
        errorMsg.textContent = 'Task is empty';
    } else {
    errorMsg.textContent = '';
    taskArray.push(taskInput.value);
    boxAdding(taskArray.length);
    taskDisplay = document.querySelector('#text' + taskArray.length);
    taskDisplay.textContent = taskArray[taskArray.length - 1];
    taskInput.value = '';
    }
}

const boxAdding = (e) => {
    const newBox = document.createElement('div');
    newBox.classList.add('box');
    newBox.setAttribute('id', e)
    display.append(newBox);

    const textBox = document.createElement('div');
    textBox.classList.add('box-display');
    newBox.append(textBox);

    const text = document.createElement('p');
    text.classList.add('task-box');
    text.setAttribute('id', 'text' + e);
    textBox.append(text);

    const optionBox = document.createElement('div');
    optionBox.classList.add('box-options');
    newBox.append(optionBox);

    const doneBtn = document.createElement('i');
    doneBtn.classList.add('fa-solid', 'fa-square-check', 'box-btn');
    doneBtn.setAttribute('id', 'done' + e);
    optionBox.append(doneBtn);

    const editBtn = document.createElement('i');
    editBtn.classList.add('fa-solid', 'fa-pen-to-square', 'box-btn');
    editBtn.setAttribute('id', 'edit' + e);
    optionBox.append(editBtn);
    
    const deleteBtn = document.createElement('i');
    deleteBtn.classList.add('fa-solid', 'fa-trash-can', 'box-btn');
    deleteBtn.setAttribute('id', 'delete' + e);
    optionBox.append(deleteBtn);
}
const boxDisplay = e => {

}

const boxDelete = () => {
}






document.addEventListener('DOMContentLoaded', mainFunction);