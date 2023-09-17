import data from './todos.js';
import domChange from './domChanges.js';

//element declaration
const main = document.getElementById('main');
const newProjectButton = document.querySelector('.newProjectButton');
const newProjectDialog = document.getElementById('newProjectDialog');
const newToDoForm = document.getElementById('newToDoForm');
const submitNewToDo = document.getElementById('submitNewToDoButton');

// Add new todo/project button
newProjectButton.addEventListener('click', () => {
    newProjectDialog.showModal();
});

// Adds new ToDo to submit button in new ToDo dialog
submitNewToDo.addEventListener('click', () => {
    const newToDo = data.createToDo(
        newToDoForm.title.value,
        newToDoForm.description.value,
        newToDoForm.dueDate.value,
        newToDoForm.priority.value
    );
    domChange.displayToDos(newToDo);
});

domChange.displayToDos(data.defaultData());