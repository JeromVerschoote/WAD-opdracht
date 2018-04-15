import React, { Component } from 'react';
//import PropTypes from 'prop-types';

//let listItems = {};
//let index;

class TodoList extends Component {
  constructor(){
    super();
    this.state = {
      'todos': []
    };
  };

  createList = () => {
    const $todo = this.props.newTodo;
    $todo.id = this.state.todos.length;

    // insert new todo into array
    this.state.todos.push($todo);
    //console.log(this.state)

    // render array
    if(this.state.todos.length > 1){ // bug: > 0 werkt niet
      return this.renderList();
    }else{
      return <p>Je hebt nog geen todo's. Voeg er snel één toe!</p>
    }
  }

  renderList = () => {

    return(
      <ol className='todo-list'>
        {
          this.state.todos.map(
            todo =>
            <li key={todo.id} className='todo-item'>
              <ul className='todo-item-list'>
                <li className='todo-task'>{todo.task}</li>
                <li className='todo-project'><span>{todo.project}</span> &#8226; {todo.client}</li>
                <li>€ {todo.rate},-/h</li>
                <li>{todo.deadline}</li>
                <li>{todo.link}</li>
              </ul>
              <button className='todo-delete' onClick={e => this.removeItemFromList(e, todo.id)}>x</button>
            </li>
          )
        }
      </ol>
    )
  }

  removeItemFromList = (e, id) => {
    // remove item from array
    //console.log(this.state.todos);
    const $tempArray =  this.state.todos;
    console.log($tempArray, $tempArray.splice(id, 1))


    this.setState({'todos': $tempArray});
    //this.state.todos.splice(id, 1);
    e.currentTarget.parentNode.remove();

    // render array
    this.renderList();
  }

  render() {
    return this.createList();
  }
}

export default TodoList;
