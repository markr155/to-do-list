// ToDo objects
//     Title  
//     Description
//     DueDate
//     Priority - Low Medium High
//     Completed
const toDoFactory = (title, description, dueDate, priority) => {
    return { title, description, dueDate, priority}
};

const projectsFactory = (title, description) => {
    const todos = [];
    const addToProject = (newToDo) => {todos.push(newToDo)};
    return { title, description, todos, addToProject};
};

function createToDo(title, description, dueDate, priority, project) {
    const newToDo = toDoFactory(title, description, dueDate, priority);
    project.addToProject(newToDo);
    return;
}

function defaultData() {
    const project = defaultProject();
    createToDo('Code', 'Finish to-do-list project', 'Next week', 'High', project);
    return project;
};

function defaultProject() {
    const project = projectsFactory('Default ToDos', 'Examples of ToDos');
    return project;

}



export default { defaultData, createToDo };

