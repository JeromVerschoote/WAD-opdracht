import {decorate, observable, action} from 'mobx';
import Project from '../models/Project';
import Todo from '../models/Todo';

class Store {
  pages = [`home`, `settings`, `profile`];
  projects = [];

  constructor() {
    this.addItem(new Project(`Hef @ NEST Gent`, `Hip Hop Hooray`, 10, `April 20, 2018`, `https://drive.google.com/open?id=1-hAHr0NjBTFTQ3AATxLiT3BYv2Ed7r5z`, new Todo(`poster`, `00:00`, `20.04.2018`)), this.projects)
    this.addItem(new Project(`Adryiano @ Charlatan Gent`, `EXTASE`, 10, `May 3, 2018`, `https://drive.google.com/open?id=1-hAHr0NjBTFTQ3AATxLiT3BYv2Ed7r5z`, new Todo(`flyer`, `44`, `morgen`)), this.projects)
    this.addItem(new Todo(`flyer`,`00:00`,`21.04.2018`), this.projects[this.findProjectIndexFromId(this.projects[0].id)].todos)
    this.addItem(new Todo(`animated banner`,`00:00`,`21.04.2018`), this.projects[this.findProjectIndexFromId(this.projects[0].id)].todos)
    this.addItem(new Todo(`price list`,`00:00`,`21.04.2018`), this.projects[this.findProjectIndexFromId(this.projects[0].id)].todos)
    this.addItem(new Todo(`floor plan`,`00:00`,`21.04.2018`), this.projects[this.findProjectIndexFromId(this.projects[0].id)].todos)
    this.addItem(new Todo(`ticket`,`00:00`,`21.04.2018`), this.projects[this.findProjectIndexFromId(this.projects[0].id)].todos)
    this.addItem(new Todo(`bracelet`,`00:00`,`21.04.2018`), this.projects[this.findProjectIndexFromId(this.projects[0].id)].todos)
    this.addItem(new Todo(`time table`,`00:00`,`21.04.2018`), this.projects[this.findProjectIndexFromId(this.projects[0].id)].todos)
    this.addItem(new Todo(`facebook avatar filter`,`00:00`,`21.04.2018`), this.projects[this.findProjectIndexFromId(this.projects[0].id)].todos)
    this.addItem(new Todo(`app`,`00:00`,`21.04.2018`), this.projects[this.findProjectIndexFromId(this.projects[0].id)].todos)
    this.addItem(new Todo(`website`,`00:00`,`21.04.2018`), this.projects[this.findProjectIndexFromId(this.projects[0].id)].todos)
  }

  /*

  handleCheck = (e, id, projectId) => {
    const listItem = e.currentTarget.parentNode;
    const todo = this.todos[this.findTodoIndexFromId(id)];

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
  }*/

  findProjectIndexFromId = id => {
    return this.projects.findIndex(item => item.id === id);
  }

  findTodoIndexFromId = id => {
    return this.todos.findIndex(todo => todo.id === id);
  }

  /**/

  addItem = (item, array) => {
    array.push(item);
  }

  editItem = (index, array, field, value) => {
    array[index][field] = value;
  }

  deleteItem = (index, array) => {
    array.splice(index, 1);
  }

  toggleProperty = (index, array, property) => {
    array[index][property] = !array[index][property];
  }
}

decorate(Store, {
  findProjectIndexFromId: action,
  findTodoIndexFromId: action,
  handleChecked: action,
  showCheckedTodos: observable,
  checkedTodos: observable,

  projects: observable,
  addItem: action,
  editItem: action,
  deleteItem: action,
  toggleProperty: action
});

const store = new Store();
export default store;
