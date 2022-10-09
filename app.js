let taskInput;
let addBtn;
let display;
let errorMsg;
let target;

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
    document.addEventListener('click', boxOptionClickChecker);
    taskInput.addEventListener('keyup', enterKey);
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
    deleteBtn.setAttribute('id', 'remove' + e);
    optionBox.append(deleteBtn);

    const newEditBox = document.createElement('div');
    newEditBox.classList.add('edit-box');
    newEditBox.setAttribute('id', 'e' + e)
    display.append(newEditBox);

    const editInput = document.createElement('input');
    editInput.classList.add('input-edit');
    editInput.setAttribute('id', 'input' + e);
    newEditBox.append(editInput);

    const editOk = document.createElement('i');
    editOk.classList.add('fa-solid', 'fa-check', 'box-btn');
    editOk.setAttribute('id', 'ok' + e);
    newEditBox.append(editOk);

    const editDeceline = document.createElement('i');
    editDeceline.classList.add('fa-solid', 'fa-square-xmark', 'box-btn');
    editDeceline.setAttribute('id', 'no' + e);
    newEditBox.append(editDeceline);
}


const boxOptionClickChecker = e => {
    target = e.target.id;
    const firstTwoChars = target.slice(0, 2);
    const lastChar = target.charAt(target.length - 1);
    
    if (firstTwoChars === 're') {
        const boxElement = document.getElementById(lastChar);
        boxElement.remove();
        const editBox = document.getElementById('e' + lastChar);
        editBox.remove();
    }

    if (firstTwoChars === 'do') {
        const boxElement = document.getElementById('text' + lastChar);
        boxElement.classList.toggle('done');
    }

    if (firstTwoChars === 'ed') {
        const boxElement = document.getElementById('e' + lastChar);
        boxElement.classList.toggle('hidden');
        const editInputDisplay = document.getElementById('input' + lastChar);
        editInputDisplay.setAttribute('value', taskArray[lastChar - 1] );
    }

    if (firstTwoChars === 'ok') {
        const editInputDisplay = document.getElementById('input' + lastChar);
        const boxElement = document.getElementById('e' + lastChar);
        taskArray[lastChar - 1] = editInputDisplay.value;
        boxElement.classList.toggle('hidden');
        const activeInput = document.getElementById('text' + lastChar);
        activeInput.textContent = taskArray[lastChar - 1];
    }

    if (firstTwoChars === 'no') {
        const boxElement = document.getElementById('e' + lastChar);
        boxElement.classList.toggle('hidden');
    }
}

const enterKey = e => {
    if (e.key === 'Enter') {
        addTask();
    }
}






document.addEventListener('DOMContentLoaded', mainFunction);
