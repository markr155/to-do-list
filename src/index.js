import data from './todos.js';
import domChange from './domChanges.js';

// Deletes To Do functionality
function deleteButtons() {
    const deleteButtons = document.getElementsByClassName('deleteToDoButton');
    for (let i = 0; i < deleteButtons.length; i++){
        deleteButtons[i].addEventListener(('click'), (e) => {
            data.projects.deleteToDo(e.currentTarget.parentElement.getAttribute('index'));
            refreshDisplay();
        })
    };
};
// Refreshes display for ToDos and Projects
function refreshDisplay() {
    domChange.displayToDos(data.projects.getActiveProject());
    domChange.displayProjects(data.projects.getProjectList());
    deleteButtons();
}
//element declaration
const main = document.getElementById('main');
const newProjectButton = document.querySelector('.newProjectButton');
const newProjectDialog = document.getElementById('newProjectDialog');
const newToDoForm = document.getElementById('newToDoForm');
const newProjectForm = document.getElementById('newProjectForm');
const deleteProjectButton = document.querySelector('class', 'deleteProjectButton');
const addNewToDoButton = document.getElementById('submitNewToDoButton');
const addNewProjectButton = document.getElementById('submitNewProjectButton');
const projectDescription = document.getElementById('projectDescription');
const projectsList = document.getElementById('projectsList');

// Show add project modal
newProjectButton.addEventListener('click', () => {
    newProjectDialog.showModal();
});

// Adds new ToDo to Add new to do button
addNewToDoButton.addEventListener('click', () => {
    const newToDo = data.createToDo(
        newToDoForm.title.value,
        newToDoForm.description.value,
        newToDoForm.dueDate.value,
        newToDoForm.priority.value,
        data.projects.getActiveProject()
    );
    // Refreshs display of current project for new To Do
    refreshDisplay();
});

// Adds new project when new project submitted
addNewProjectButton.addEventListener('click', () => {
    const newProject = data.projects.createProject(
        newProjectForm.title.value,
        projectDescription.value
    )
    data.projects.addProject(newProject);
    domChange.displayProjects(data.projects.getProjectList());
});

data.defaultData();
refreshDisplay();

