// Add ToDo-s to main div
function displayToDos(toDoArray) {
    // Clear Main
    main.textContent = '';
    main.appendChild(mainHeader());
    // Loop through To Do Array and display each item 
    toDoArray.forEach((toDo, index) => {
        const newToDo = document.createElement('div');
        newToDo.appendChild(addPropertyToDisplay(toDo, 'title'));
        newToDo.appendChild(addPropertyToDisplay(toDo, 'description'));
        newToDo.appendChild(addPropertyToDisplay(toDo, 'dueDate'));
        newToDo.appendChild(addPropertyToDisplay(toDo, 'priority'));
        const toDoCompleted = document.createElement('div');
        toDoCompleted.textContent = 'No';
        newToDo.appendChild(toDoCompleted);
        newToDo.classList.add('toDoItem');
        newToDo.setAttribute('index', index);
        main.appendChild(newToDo);
    });
}

// Returns the item property as a div
function addPropertyToDisplay(item, property) {
    const element = document.createElement('div');
    element.classList.add(property);
    element.textContent = item[property];
    return element;
}

// Creates header in main div
function mainHeader() {
    const header = document.createElement('div');
    const headerTitle = document.createElement('div');
    headerTitle.textContent = 'Title';
    const headerDescription = document.createElement('div');
    headerDescription.textContent = 'Description';
    const headerDueDate = document.createElement('div');
    headerDueDate.textContent = 'Due Date';
    const headerPriority = document.createElement('div');
    headerPriority.textContent = 'Priority';
    const headerCompleted = document.createElement('div');
    headerCompleted.textContent = 'Completed';
    header.appendChild(headerTitle);
    header.appendChild(headerDescription);
    header.appendChild(headerDueDate);
    header.appendChild(headerPriority);
    header.appendChild(headerCompleted);
    return header;
};

export default displayToDos;