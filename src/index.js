import data from './todos.js';
import domChange from './domChanges.js';

// Deletes To Do event on click
function deleteButtons() {
    const deleteButtons = document.getElementsByClassName('deleteToDoButton');
    for (let i = 0; i < deleteButtons.length; i++){
        deleteButtons[i].addEventListener(('click'), (e) => {
            data.projects.deleteToDo(e.currentTarget.parentElement.getAttribute('index'));
            refreshToDos();
        })
    };
};
// Changes Active Project on click
function changeActiveProject() {
    const projectListItems = document.querySelectorAll('.projectListItem');
    for (let i = 0; i < projectListItems.length; i++){
        projectListItems[i].addEventListener('click', (e) => {
            const projectsList = data.projects.getProjectList();
            data.projects.setActiveProject(projectsList[e.target.dataset.index]);
            refreshToDos();
        });
    };
};

// Refreshes display for Projects
function refreshProjects() {
    domChange.displayProjects(data.projects.getProjectList());
    changeActiveProject();

};
// Refreshes display for To Dos
function refreshToDos() {
    domChange.displayToDos(data.projects.getActiveProject());
    deleteButtons();
}
//element declaration
const main = document.getElementById('main');
const newProjectButton = document.querySelector('.newProjectButton');
const newProjectDialog = document.getElementById('newProjectDialog');
const newToDoForm = document.getElementById('newToDoForm');
const newProjectForm = document.getElementById('newProjectForm');
const deleteProjectButton = document.querySelector('.deleteProjectButton');
const addNewToDoButton = document.getElementById('submitNewToDoButton');
const addNewProjectButton = document.getElementById('submitNewProjectButton');
const projectDescription = document.getElementById('projectDescription');
const projectsList = document.getElementById('projectsList');

// Show add project modal
newProjectButton.addEventListener('click', () => {
    newProjectDialog.showModal();
});

// Adds new ToDo from form data
addNewToDoButton.addEventListener('click', () => {
    const newToDo = data.createToDo(
        newToDoForm.title.value,
        newToDoForm.description.value,
        newToDoForm.dueDate.value,
        newToDoForm.priority.value,
        data.projects.getActiveProject()
    );
    // Refreshs display of current project for new To Do
    refreshToDos();
});

// Deletes project on click
deleteProjectButton.addEventListener('click', () => {
    data.projects.deleteProject();
    refreshProjects();
});

// Adds new project when new project submitted
addNewProjectButton.addEventListener('click', () => {
    const newProject = data.projects.createProject(
        newProjectForm.title.value,
        projectDescription.value
    );
    data.projects.addProject(newProject);
    refreshProjects();
});

console.clear();
data.defaultData();
refreshToDos();
refreshProjects();

