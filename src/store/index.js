import {decorate, observable, action} from 'mobx';
import Project from '../models/Project';
import Todo from '../models/Todo';

class Store {
  pages = [`home`, `settings`, `profile`];
  projects = [];
  todos = [];
  currentTarget = {};

  checkedTodos = [];
  showCheckedTodos = false;
  projectSelected = false;

  constructor() {
    this.addProject(new Project(`Edition 2018`, `Dour`, 10, ``, `https://drive.google.com/open?id=1-hAHr0NjBTFTQ3AATxLiT3BYv2Ed7r5z`, new Todo(`poster`, `00:00`, `20.04.2018`)))
    this.addProject(new Project(`2018`, `Copacobana`, 10, ``, `https://drive.google.com/open?id=1-hAHr0NjBTFTQ3AATxLiT3BYv2Ed7r5z`, new Todo(`flyer`, `44`, `morgen`)))

    this.addTodo(new Todo(`flyer`,`00:00`,`21.04.2018`), this.projects[this.getIndexFromId(this.projects[0].id)].id)
    this.addTodo(new Todo(`animated banner`,`00:00`,`21.04.2018`), this.projects[this.getIndexFromId(this.projects[0].id)].id)
    this.addTodo(new Todo(`price list`,`00:00`,`21.04.2018`), this.projects[this.getIndexFromId(this.projects[0].id)].id)
    this.addTodo(new Todo(`floor plan`,`00:00`,`21.04.2018`), this.projects[this.getIndexFromId(this.projects[0].id)].id)
    this.addTodo(new Todo(`ticket`,`00:00`,`21.04.2018`), this.projects[this.getIndexFromId(this.projects[0].id)].id)
    this.addTodo(new Todo(`bracelet`,`00:00`,`21.04.2018`), this.projects[this.getIndexFromId(this.projects[0].id)].id)
    this.addTodo(new Todo(`time table`,`00:00`,`21.04.2018`), this.projects[this.getIndexFromId(this.projects[0].id)].id)
    this.addTodo(new Todo(`facebook avatar filter`,`00:00`,`21.04.2018`), this.projects[this.getIndexFromId(this.projects[0].id)].id)
    this.addTodo(new Todo(`app`,`00:00`,`21.04.2018`), this.projects[this.getIndexFromId(this.projects[0].id)].id)
    this.addTodo(new Todo(`website`,`00:00`,`21.04.2018`), this.projects[this.getIndexFromId(this.projects[0].id)].id)

    this.currentProject = this.projects[0];
  }

  addProject = project => {
    this.projects.push(project);
  }

  addTodo = (todo, id) => {
    this.projects[this.getIndexFromId(id)].todos.push(todo);
  }

  removeTodo = e => {
    e.currentTarget.parentNode.remove();
  }

  timeTodo = e => {
    console.log(e);
    // tijd element zoeken
    // timer starten
    // tijd element updaten naar gelang timer
  }

  getTodos = id => {
    this.projectSelected = true;
    this.todos = this.projects[this.getIndexFromId(id)].todos;
  }

  getIndexFromId = id => {
    return this.projects.findIndex(project => project.id === id);
  }

  getTodoIndexFromId = id => {
    return this.todos.findIndex(todo => todo.id === id);
  }

  handleCheck = (e, id, projectId) => {
    const listItem = e.currentTarget.parentNode;
    const todo = this.todos[this.getTodoIndexFromId(id)];

    todo.hidden = !todo.hidden;

    if(todo.hidden){
      listItem.remove(); // replace with hide
    }else{
      this.addTodo(todo, projectId) // replace with show
      listItem.remove(); // replace with hide
    }
  }

  findHidden = todos => {
    const hiddenTodos = [];

    todos.forEach(element =>
      element.hidden === true &&
      hiddenTodos.push(element)
    )
    return hiddenTodos;
  }

  toggleCheckedTodos = e => {
    this.checkedTodos = this.findHidden(this.todos);

    if(this.checkedTodos){
      this.showCheckedTodos =! this.showCheckedTodos;
      if(e.currentTarget.innerHTML === `Show Completed Todo's`){
        e.currentTarget.innerHTML = `Hide Completed Todo's`;
      }else{
        e.currentTarget.innerHTML = `Show Completed Todo's`;
      }
    }
  }
}

decorate(Store, {
  projects: observable,
  todos: observable,
  getTodos: action,
  addProject: action,
  removeTodo: action,
  getIndexFromId: action,
  getTodoIndexFromId: action,
  handleChecked: action,
  showCheckedTodos: observable,
  checkedTodos: observable
});

const store = new Store();
export default store;
