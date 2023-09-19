// Add ToDos to main div
function displayToDos(project) {
    // Clear Main
    main.textContent = '';
    // Loop through To Do Array and display each item 
    project.todos.forEach((toDo, index) => {
        const newToDo = document.createElement('div');
        newToDo.appendChild(addPropertyToDisplay(toDo, 'title'));
        newToDo.appendChild(detailsButton());
        newToDo.appendChild(addPropertyToDisplay(toDo, 'dueDate'));
        newToDo.appendChild(addPropertyToDisplay(toDo, 'priority'));
        // Completed part of To Do
        const toDoCompleted = document.createElement('div');
        toDoCompleted.textContent = 'No';
        newToDo.appendChild(toDoCompleted);
        newToDo.classList.add('toDoItem');
        newToDo.appendChild(toDoDelete());
        // Set To Do index for deletion 
        newToDo.setAttribute('index', index);
        main.appendChild(newToDo);
    });
    main.appendChild(newToDoButton());
}

// Returns the item property as a div
function addPropertyToDisplay(item, property) {
    const element = document.createElement('div');
    element.classList.add(property);
    element.textContent = item[property];
    return element;
};
// Delete To Do button
function toDoDelete(){
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('deleteToDoButton');
    return deleteButton;
};
// Create New To Do button in main
function newToDoButton() {
    const button = document.createElement('button');
    button.textContent = 'New To Do';
    button.classList.add('newToDoButton');
    button.addEventListener('click', () => {
        newToDoDialog.showModal();
    })
    return button;
};
// Adds details button to To Do
function detailsButton() {
    const button = document.createElement('button');
    button.textContent = 'Details';
    button.classList.add('detailsButton');
    return button;
};
// Project list display
function displayProjects(projects) {
    projectsList.textContent = '';
    projectsList.appendChild(viewAllProjects());
    projects.forEach((project, index) => {
        const newProject = document.createElement('li');
        newProject.classList.add('projectListItem');
        newProject.textContent = project.title;
        newProject.dataset.index = index;
        projectsList.appendChild(newProject);
    });
};
// Adds View all list item for project list
function viewAllProjects() {
    const listItem = document.createElement('li');
    listItem.classList.add('projectListItem');
    listItem.textContent = 'View All';
    return listItem;
}

export default { displayToDos, displayProjects };