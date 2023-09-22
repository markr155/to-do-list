// Add ToDos to main div
function displayToDos(project) {
    // Clear Main
    main.textContent = '';
    // Loop through To Do Array and display each item 
    try{
        project.todos.forEach((toDo, index) => {
            const newToDo = document.createElement('div');
            newToDo.appendChild(addCompletedBox());
            newToDo.appendChild(addPropertyToDisplay(toDo, 'title'));
            newToDo.appendChild(detailsButton());
            newToDo.appendChild(addPropertyToDisplay(toDo, 'dueDate'));
            newToDo.appendChild(addPropertyToDisplay(toDo, 'priority'));
            newToDo.classList.add('toDoItem');
            newToDo.appendChild(toDoDelete());
            // Set To Do index for deletion 
            newToDo.setAttribute('index', index);
            main.appendChild(newToDo);
            });
        main.appendChild(newToDoButton());
        }
    catch(err){
        console.log('No projects in list');
        main.textContent = 'Add a new project to begin';
        };
};
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
// Checkbox for completed ToDo
function addCompletedBox() {
    const box = document.createElement('input');
    box.type = 'checkbox';
    box.classList.add('checkbox');
    box.addEventListener('change', (e) => {
        const todo = e.target.nextElementSibling;
        e.target.checked === true ? todo.classList.add('completed') : todo.classList.remove('completed');
    });
    return box;
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
        addActiveClass(newProject);
        projectsList.appendChild(newProject);
    });
};
// Add active class event listener
function addActiveClass(element) {
    element.addEventListener('click', (e) => {
        const projectListItems = document.querySelectorAll('.projectListItem');
        projectListItems.forEach((listItem) => {
            listItem.classList.remove('active');
        });
        e.target.classList.add('active'); 
    });
}
// Adds View all list item for project list
function viewAllProjects() {
    const listItem = document.createElement('li');
    listItem.id = 'viewAllProjects';
    listItem.classList.add('projectListItem');
    listItem.textContent = 'View All Projects';
    addActiveClass(listItem);
    return listItem;
};

export default { displayToDos, displayProjects, addActiveClass };