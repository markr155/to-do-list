import data from './todos.js';
import domChange from './domChanges.js';

//element declaration
const main = document.getElementById('main');
const newProjectButton = document.querySelector('.newProjectButton');
const newProjectDialog = document.getElementById('newProjectDialog');
const newToDoForm = document.getElementById('newToDoForm');
const submitNewToDo = document.getElementById('submitNewToDoButton');
const submitNewProject = document.getElementById('submitNewProjectButton');

// Add new todo/project button
newProjectButton.addEventListener('click', () => {
    newProjectDialog.showModal();
});

// Adds new ToDo to Add new to do button
submitNewToDo.addEventListener('click', () => {
    const newToDo = data.createToDo(
        newToDoForm.title.value,
        newToDoForm.description.value,
        newToDoForm.dueDate.value,
        newToDoForm.priority.value,
        data.projects.getActiveProject()
    );
    domChange.displayToDos(data.projects.getActiveProject());
});

// Adds new project to Add new project button
submitNewProject.addEventListener('click', () => {
    
});

domChange.displayToDos(data.defaultData());