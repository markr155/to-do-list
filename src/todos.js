// ToDo objects
//     Title  
//     Description
//     DueDate
//     Priority - Low Medium High
//     Completed
const toDoFactory = (title, description, dueDate, priority) => {
    return { title, description, dueDate, priority}
};

// Storing each ToDo
const toDoArray = [];

function addToDo(todo){
    toDoArray.push(todo);
};

function defaultData() {
    const toDo1 = toDoFactory('Code', 'Finish to-do-list project', 'Next week', 'High');
    addToDo(toDo1);
    return toDoArray;
};

export default defaultData;
