import data from './todos.js';
import domChange from './domChanges.js';

//element declaration
const main = document.getElementById('main');
const newButton = document.querySelector('.newButton');
newButton.addEventListener('click', () => {
    
})

domChange.displayToDos(data.defaultData());