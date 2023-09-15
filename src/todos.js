// ToDo objects
//     Title  
//     Description
//     DueDate
//     Priority - Low Medium High
//     Completed
const toDoFactory = (title, description, dueDate, priority) => {
    return { title, description, dueDate, priority}
};

const toDo1 = toDoFactory('Code', 'Finish to-do-list project', 'Next week', 'High');

console.log(toDo1.title);

