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

  render() {
    return (
      <React.Fragment>
        <AddTodo onAddTodo={this.handleAddTodo} />
        <h2>Todo's</h2>
        <TodoList newTodo={this.state.newTodo} />
      </React.Fragment>
    );
  }
}

export default App;
