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
            console.log(project)
          }
          {
            //project.todos[0]?
            project.todos.map((todo, index) => <TodoItem store={store} todo={todo} index={index} key={todo.id} project={project}/>)
            //:<p className='ifEmpty'>Voeg snel je todo's toe!</p>
          }
        </ol>
        <TodoForm store={store} project={project}/>
      </div>
    )};
  }

  export default observer(TodosSection);
