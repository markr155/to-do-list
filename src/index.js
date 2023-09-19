import data from './todos.js';
import domChange from './domChanges.js';

//element declaration
const main = document.getElementById('main');
const newProjectButton = document.querySelector('.newProjectButton');
const newProjectDialog = document.getElementById('newProjectDialog');
const newToDoForm = document.getElementById('newToDoForm');
const newProjectForm = document.getElementById('newProjectForm');
const addNewToDo = document.getElementById('submitNewToDoButton');
const addNewProject = document.getElementById('submitNewProjectButton');
const projectDescription = document.getElementById('projectDescription');
const projectsList = document.getElementById('projectsList');

// Show add project modal
newProjectButton.addEventListener('click', () => {
    newProjectDialog.showModal();
});

// Adds new ToDo to Add new to do button
addNewToDo.addEventListener('click', () => {
    const newToDo = data.createToDo(
        newToDoForm.title.value,
        newToDoForm.description.value,
        newToDoForm.dueDate.value,
        newToDoForm.priority.value,
        data.projects.getActiveProject()
    );
    // Refreshs display of current project for new To Do
    domChange.displayToDos(data.projects.getActiveProject());
});

// Adds new project when new project submitted
addNewProject.addEventListener('click', () => {
    const newProject = data.projects.createProject(
        newProjectForm.title.value,
        projectDescription.value
    )
    data.projects.addProject(newProject);
    domChange.displayProjects(data.projects.getProjectList());
});
data.defaultData();
domChange.displayToDos(data.projects.getActiveProject());
domChange.displayProjects(data.projects.getProjectList());