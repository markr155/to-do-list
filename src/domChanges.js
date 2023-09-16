// Add ToDo-s to main div
function displayToDos(toDoArray) {
    const main = document.querySelector('.main');
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
        main.appendChild(newToDo);
    });
}

function addPropertyToDisplay(item, property) {
    const element = document.createElement('div');
    element.classList.add(property);
    element.textContent = item[property];
    return element;
}

export default displayToDos;