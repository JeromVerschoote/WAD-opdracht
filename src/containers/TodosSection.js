import React, { Component } from "react";
import {observer} from 'mobx-react';

import TodoItem from '../components/TodoItem';
import TodoForm from '../components/TodoForm';

class TodosSection extends Component {
  render(){
    const {store, project} = this.props

    return(
      <div className='project-todos'>
        <h2 className='hidden'>Todos</h2>
        <ol className='todos-list'>
          {
            project.todos[0]?
            project.todos.map((todo, index) => <TodoItem store={store} todo={todo} index={index} key={todo.id} parentArray={project.todos}/>)
            :<p className='ifEmpty'>Voeg hier snel je todo's toe!</p>
          }
          {
            console.log(project.todos)
          }
        </ol>
        <TodoForm store={store} parentArray={project.todos}/>
      </div>
    )};
  }

  export default observer(TodosSection);
