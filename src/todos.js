// Set/Get Active project
const projects = (function projectList() {
    const projectStorage = [];
    let activeProject = '';
    let activeProjectIndex = '';
    return {
        getActiveProject: function() {
            return activeProject;
        },
        setActiveProject: function(project) {
            activeProject = project;
            activeProjectIndex = projectStorage.indexOf(project);
        },
        getProjectList: function() {
            return projectStorage;
        },
        addProject: function(project) {
            projectStorage.push(project);
        },
        createProject: function createProject(title, description){
            const newProject = projectsFactory(title, description);
            return newProject;
        },
        deleteToDo: function deleteToDo(todoIndex){
            projectStorage.splice(todoIndex, 1);
        },
        deleteProject: function deleteProject(){
            projectStorage.splice(activeProjectIndex, 1);
            setActiveProject(projectStorage[0]);

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
// Creates new project


// Creates default data to do and adds to default project for initial load
function defaultData() {
    const project = projects.createProject('Default To Dos', 'Examples of ToDos');
    createToDo('Code', 'Finish to-do-list project', '2023-09-19', 'High', project);
    projects.addProject(project);
    projects.setActiveProject(project);
};



export default { defaultData, createToDo, projects };

