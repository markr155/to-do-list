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
        //Completed part of To Do
        const toDoCompleted = document.createElement('div');
        toDoCompleted.textContent = 'No';
        newToDo.appendChild(toDoCompleted);
        newToDo.classList.add('toDoItem');
        // Delete To Do button
        const toDoDelete = document.createElement('button');
        toDoDelete.textContent = 'Delete';
        toDoDelete.classList.add('deleteToDoButton');
        newToDo.appendChild(toDoDelete);
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

function detailsButton() {
    const button = document.createElement('button');
    button.textContent = 'Details';
    button.classList.add('detailsButton');
    return button;
}

export default { displayToDos };