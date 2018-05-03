import {decorate, observable, action} from 'mobx';
import Api from "../api/projects.js";

class Store {
  pages = [`home`, `settings`, `profile`];
  projects = [];

  constructor() {
    this.api = new Api();
    this.api.getAll().then(projects => this._init(projects));
  }

  findProjectIndexFromId = id => {
    return this.projects.findIndex(item => item._id === id);
  }

  timeToDate = time => {
    const months = [`January`, `February`, `March`, `April`, `May`, `June`, `July`, `August`, `September`, `October`, `November`, `December`];

    if(time.toString().slice(0,1) !== `2`){
      return `${months[time.getMonth()]} ${time.getDate()}, ${time.getFullYear()}`
    }else{
      return `${months[time.slice(6,7)]} ${time.slice(8, 10)}, ${time.slice(0, 4)}`
    }
  }

  /* API */

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

  /* project methods */

  addTodo = (todo, project) => {
    project.todos.push(todo);
  }

  removeTodo = (todo, project) => {
    project.todos.remove(todo);
  }

  /* timer methods */

  toggleTimer = (timer) => {
    if(!timer.counting){
      timer.intervalId = setInterval(this.tick(timer), 1000);
    }else if(timer.counting){
      clearInterval(timer.intervalId);
    }
    timer.counting = !timer.counting;
  }

  tick = (timer) => {
    console.log(timer);
    timer.seconds += 1;
    timer.totalSeconds += 1;

    if(timer.seconds >= 59){
      timer.minutes += 1;
      timer.seconds = 0;

      if(timer.minutes >= 59){
        timer.hours += 1;
        timer.minutes = 0;
      }
    }
  }

  /* todo methods */

  toggleCompleted = todo => {
    todo[`completed`] = ! todo[`completed`];
  }

}

decorate(Store, {
  projects: observable,
  add: action,
  toggleTimer: action,
  tick: action
});

const store = new Store();
export default store;

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
