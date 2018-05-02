import React, { Component } from "react";
import {observer} from 'mobx-react';
import PropTypes from "prop-types";

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
            //project.todos[0]?
            project.todos.map((todo, index) => <TodoItem store={store} project={project} todo={todo} key={todo.id} />)
            //:<p className='ifEmpty'>Voeg snel je todo's toe!</p>
          }
        </ol>
        <TodoForm store={store} project={project}/>
      </div>
    )};
  }

  TodosSection.propTypes = {
    store: PropTypes.object.isRequired,
    project: PropTypes.object.isRequired
  }

  export default observer(TodosSection);
