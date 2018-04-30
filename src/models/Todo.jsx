import uniqid from "uniqid";
import {decorate, observable} from 'mobx';

import Timer from '../models/Timer.jsx';

class Todo {
  constructor(task, time, deadline) {
    this.id = uniqid();
    this.task = task;
    this.time = new Timer(0, 0, 0);
    this.deadline = new Date(deadline);
    this.completed = false;
  }
}

decorate(Todo, {
  task: observable,
  time: observable,
  deadline: observable,
  completed: observable
});

export default Todo;
