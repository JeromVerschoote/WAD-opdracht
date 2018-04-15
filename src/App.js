import React, { Component } from 'react';
import './App.css';
//
import AddTodo from './AddTodo.jsx';
import TodoList from './TodoList.jsx';


class App extends Component {
  constructor(){
    super();
    this.state = {'newTodo': {}}
  };

  handleAddTodo = todo => {
    this.setState({ 'newTodo': todo });
  }

  handleOngoing = element => {
    document.querySelector('.ongoing-list').innerHTML = element.outerHTML;
  }

  render() {
    return (
      <React.Fragment>
        <AddTodo onAddTodo={this.handleAddTodo} />
        <h2>Todo's</h2>
        <TodoList newTodo={this.state.newTodo} addOngoing={this.handleOngoing}/>
        <h2>Ongoing</h2>
        <ol className='todo-list ongoing-list'></ol>
        <h2>Done</h2>
      </React.Fragment>
    );
  }
}

export default App;
