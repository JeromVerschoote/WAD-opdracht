class Api {
  url = `http://localhost:4000/projects`;

  getAll = () => {
    return fetch(`${this.url}`).then(r => r.json());
  };

  create = project => {
    return fetch(`${this.url}`, this.getOptions(`post`, project))
      .then(r => r.json());
  };

  update = project => {
    console.log(project);
    return fetch(`${this.url}/${project._id}`, this.getOptions(`put`, project))
      .then(r => r.json())
      .catch(err => console.error(err));
  };

  remove = project => {
    return fetch(`${this.url}/${project._id}`, this.getOptions(`delete`))
      .then(r => r.json())
      .catch(err => console.error(err));
  };

  getOptions = (method, body = null) => {
    const options = {
      method: method.toUpperCase(),
      headers: {
        "content-type": `application/json`
      }
    };
    if (body) {
      options.body = JSON.stringify(body);
    }
    return options;
  };
}
export default Api;
