import data from './todos.js';
import domChange from './domChanges.js';

//element declaration
const main = document.getElementById('main');
const newButton = document.querySelector('.newButton');
const newDialog = document.getElementById('openNewDialog');

// Add new todo/project button
newButton.addEventListener('click', () => {
    newDialog.showModal();
})

domChange.displayToDos(data.defaultData());