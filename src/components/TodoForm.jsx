import React from "react";
import PropTypes from "prop-types";
import {observer} from 'mobx-react';

import Todo from '../models/Todo';

const TodoForm = ({store, project}) => {

  const handleSubmitForm = e => {
    e.preventDefault();

    const form = e.currentTarget;

    if(form.task.value && form.time && form.deadline.value){
      const todo = new Todo(form.task.value, form.time.value, form.deadline.value)
      project.todos.push(todo)
      //project.addTodo(todo);
      store.update(project);
      form.reset();
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
}

export default observer(TodoForm);
