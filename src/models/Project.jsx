import uniqid from "uniqid";
import {decorate, observable, computed} from 'mobx';

class Project {
  constructor(name, client, rate, deadline, download, todos) {
    this.id = uniqid();
    this.name = name;
    this.client = client;
    this.rate = rate;
    this.deadline = new Date(deadline);
    this.download = download;
    this.todos = [todos];
  }

  get totalTime(){
    let time = this.todos.reduce((total, todo) => total += todo.time.totalSeconds, 0);
    let hours = Math.floor(time / 60 / 60);
    let minutes = Math.floor(time / 60) % 60;

    return `${hours < 10?`0${hours}h`:`${hours}h`}${minutes < 10?`0${minutes}`:`${minutes}`}`;
  }

  get totalEarnings(){
    let seconds = this.todos.reduce((total, todo) => total += todo.time.totalSeconds, 0);
    return Math.round(seconds * (this.rate/3600));
  }
}

decorate(Project, {
  name: observable,
  client: observable,
  rate: observable,
  deadline: observable,
  download: observable,
  todos: observable,
  totalTime: computed,
  totalEarnings: computed
});

export default Project;
