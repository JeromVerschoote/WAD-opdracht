import uniqid from "uniqid";
import {decorate, observable} from 'mobx';

class Project {
  constructor(name, client, rate, deadline, download, todos) {
    this.id = uniqid();
    this.name = name;
    this.client = client;
    this.rate = rate;
    this.deadline = deadline;
    this.download = download;
    this.todos = [todos];
  }
}

decorate(Project, {
  name: observable,
  client: observable,
  rate: observable,
  deadline: observable,
  download: observable,
  todos: observable
});

export default Project;
