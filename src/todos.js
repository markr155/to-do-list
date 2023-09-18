// Set/Get Active project
const projects = (function projectList() {
    let activeProject = '';
    return {
        getActiveProject: function() {
            return activeProject;
        },
        setActiveProject: function(project) {
            activeProject = project;
        }
    };
})();

// To Do Creator
const toDoFactory = (title, description, dueDate, priority) => {
    return { title, description, dueDate, priority}
};
// Project Creator
const projectsFactory = (title, description) => {
    const todos = [];
    const addToProject = (newToDo) => {todos.push(newToDo)};
    return { title, description, todos, addToProject};
};
// Creates To Do and adds to project that is passed
function createToDo(title, description, dueDate, priority, project) {
    const newToDo = toDoFactory(title, description, dueDate, priority);
    project.addToProject(newToDo);
    return;
};
// Creates default data to do and adds to default project for initial load
function defaultData() {
    const project = defaultProject();
    createToDo('Code', 'Finish to-do-list project', 'Next week', 'High', project);
    projects.setActiveProject(project);
    return project;
};

function defaultProject() {
    const project = projectsFactory('Default ToDos', 'Examples of ToDos');
    return project;
}



export default { defaultData, createToDo, projects };

