import React from "react";
import PropTypes from "prop-types";
import {observer} from 'mobx-react';

import Todo from '../models/Todo';

const TodoForm = ({store, project}) => {

  const handleSubmitForm = e => {
    e.preventDefault();

    const {addTodo, update} = store;
    const {task, time, deadline} = e.currentTarget;

    if(task.value && time.value && deadline.value){
      addTodo(new Todo(task.value, time.value, deadline.value), project);
      update(project);

      e.currentTarget.reset();
    }
  }

  return (
    <form onSubmit={handleSubmitForm} className='addTodo'>
      <input name="task" defaultValue="" type="text" className='addTodo-input addTodo-input--task' placeholder='New todo'/>
      <input name="time" defaultValue="00:00" type="time" className='addTodo-input addTodo-input--time hidden'/>
      <input name="deadline" defaultValue="" type="date" className='addTodo-input addTodo-input--deadline'/>
      <input type="submit" value="+" className='addTodo-input addTodo-input--submit'/>
    </form>
  );
};

TodoForm.propTypes = {
  store: PropTypes.object.isRequired,
  project: PropTypes.object.isRequired
}

export default observer(TodoForm);
