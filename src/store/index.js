import {decorate, observable, action} from 'mobx';
import Api from "../api/projects.js";

//import Project from '../models/Project';
//import Todo from '../models/Todo';

class Store {
  pages = [`home`, `settings`, `profile`];
  projects = [];

  constructor() {
    this.api = new Api();
    this.api.getAll().then(projects => this._init(projects));

    //this.add(new Project(`Hef @ NEST Gent`, `Hip Hop Hooray`, 10, `2018-04-20`, `https://drive.google.com/open?id=1-hAHr0NjBTFTQ3AATxLiT3BYv2Ed7r5z`, new Todo(`poster`, ``, `2018-04-21`)), this.projects);
    //this.add(new Project(`Adryiano @ Charlatan Gent`, `EXTASE`, 10, `2018-05-03`, `https://drive.google.com/open?id=1-hAHr0NjBTFTQ3AATxLiT3BYv2Ed7r5z`, new Todo(`flyer`, ``, `2018-05-03`)), this.projects);

    //this.addItem(new Project(`Hef @ NEST Gent`, `Hip Hop Hooray`, 10, `2018-04-20`, `https://drive.google.com/open?id=1-hAHr0NjBTFTQ3AATxLiT3BYv2Ed7r5z`, new Todo(`poster`, `00:00`, `2018-04-21`)), this.projects);

    /*this.add(new Todo(`flyer`,`00:00`,`2018-04-21`), this.projects[0].todos)
    this.add(new Todo(`animated banner`,`00:00`,`2018-04-21`), this.projects[0].todos)
    this.add(new Todo(`price list`,`00:00`,`2018-04-21`), this.projects[0].todos)
    this.add(new Todo(`floor plan`,`00:00`,`2018-04-21`), this.projects[0].todos)
    this.add(new Todo(`ticket`,`00:00`,`2018-04-21`), this.projects[0].todos)
    this.add(new Todo(`bracelet`,`00:00`,`2018-04-21`), this.projects[0].todos)
    this.add(new Todo(`time table`,`00:00`,`2018-04-21`), this.projects[0].todos)
    this.add(new Todo(`facebook avatar filter`,`00:00`,`2018-04-21`), this.projects[0].todos)
    this.add(new Todo(`app`,`00:00`,`2018-04-21`), this.projects[0].todos)
    this.add(new Todo(`website`,`00:00`,`2018-04-21`), this.projects[0].todos)*/
  }

  findProjectIndexFromId = id => {
    return this.projects.findIndex(item => item._id === id);
  }

  findTodoIndexFromId = id => {
    return this.todos.findIndex(todo => todo.id === id);
  }

  toggleProperty = (index, array, property) => {
    array[index][property] = !array[index][property];
  }

  timeToDate = time => {
    if(time.slice(0,1) === `2`){
      const months = [`January`, `February`, `March`, `April`, `May`, `June`, `July`, `August`, `September`, `October`, `November`, `December`];
      return `${months[time.slice(6,7)]} ${time.slice(8, 10)}, ${time.slice(0, 4)}`
    }
    console.log(time);
  }

  /* With API */

  _init = (_array) => {
    this.projects = _array;
  }

  add = (item, array) => {
    this.api.create(item).then(item => this._add(item, array));
  }

  _add = (item, array) => {
    array.push(item);
  }

  edit = (item, field, value) => {
    item[field] = value;
  }

  update = (item) => {
    this.api.update(item).then(item => this._update(item))
  }

  _update = (item) => {
    const index = this.findProjectIndexFromId(item._id);
    this.projects[index] = item;
  }

  remove = (item, array) => {
    this.api.remove(item).then(() => this._remove(item, array));
  }

  _remove = (item, array) => {
    array.remove(item);
  }


/* Without API */

/*
  add = (item, array) => {
    array.push(item);
  }

  update = (item, array, field, value) => {
    const index = this.findProjectIndexFromId(item.id);
    array[index][field] = value;
  }

  remove = (index, array) => {
    array.splice(index, 1);
  }
  */

}

decorate(Store, {
  //findProjectIndexFromId: action,
  //findTodoIndexFromId: action,
  //handleChecked: action,
  //showCheckedTodos: observable,
  //checkedTodos: observable,

  projects: observable,
  addItem: action,
  //editItem: action,
  //deleteItem: action,
  //toggleProperty: action,

  //setProject: action,
  //resetProject: action,
  add: action
});

const store = new Store();
export default store;

/* backup */

/*
addItem = (item, array) => {
  array.push(item);
}

editItem = (index, array, field, value) => {
  array[index][field] = value;
}

deleteItem = (index, array) => {
  array.splice(index, 1);
}
*/
