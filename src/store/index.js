import {decorate, observable, action} from 'mobx';
import Project from '../models/Project';
import Todo from '../models/Todo';

class Store {
  pages = [`home`, `settings`, `profile`];
  projects = [];

  constructor() {
    this.addItem(new Project(`Hef @ NEST Gent`, `Hip Hop Hooray`, 10, `2018-04-20`, `https://drive.google.com/open?id=1-hAHr0NjBTFTQ3AATxLiT3BYv2Ed7r5z`, new Todo(`poster`, `00:00`, `2018-04-21`)), this.projects)
    this.addItem(new Project(`Adryiano @ Charlatan Gent`, `EXTASE`, 10, `2018-05-03`, `https://drive.google.com/open?id=1-hAHr0NjBTFTQ3AATxLiT3BYv2Ed7r5z`, new Todo(`flyer`, `44`, `2018-05-03`)), this.projects)
    this.addItem(new Todo(`flyer`,`00:00`,`2018-04-21`), this.projects[this.findProjectIndexFromId(this.projects[0].id)].todos)
    this.addItem(new Todo(`animated banner`,`00:00`,`2018-04-21`), this.projects[this.findProjectIndexFromId(this.projects[0].id)].todos)
    this.addItem(new Todo(`price list`,`00:00`,`2018-04-21`), this.projects[this.findProjectIndexFromId(this.projects[0].id)].todos)
    this.addItem(new Todo(`floor plan`,`00:00`,`2018-04-21`), this.projects[this.findProjectIndexFromId(this.projects[0].id)].todos)
    this.addItem(new Todo(`ticket`,`00:00`,`2018-04-21`), this.projects[this.findProjectIndexFromId(this.projects[0].id)].todos)
    this.addItem(new Todo(`bracelet`,`00:00`,`2018-04-21`), this.projects[this.findProjectIndexFromId(this.projects[0].id)].todos)
    this.addItem(new Todo(`time table`,`00:00`,`2018-04-21`), this.projects[this.findProjectIndexFromId(this.projects[0].id)].todos)
    this.addItem(new Todo(`facebook avatar filter`,`00:00`,`2018-04-21`), this.projects[this.findProjectIndexFromId(this.projects[0].id)].todos)
    this.addItem(new Todo(`app`,`00:00`,`2018-04-21`), this.projects[this.findProjectIndexFromId(this.projects[0].id)].todos)
    this.addItem(new Todo(`website`,`00:00`,`2018-04-21`), this.projects[this.findProjectIndexFromId(this.projects[0].id)].todos)
  }

  findProjectIndexFromId = id => {
    return this.projects.findIndex(item => item.id === id);
  }

  findTodoIndexFromId = id => {
    return this.todos.findIndex(todo => todo.id === id);
  }

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

  timeToDate = time => {
    const months = [`January`, `February`, `March`, `April`, `May`, `June`, `July`, `August`, `September`, `October`, `November`, `December`];
    return `${months[time.getMonth()]} ${time.getDate()}, ${time.getFullYear()}`
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
