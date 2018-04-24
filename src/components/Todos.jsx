import React from "react";
import {observer} from 'mobx-react';
import Todo from '../models/Todo';

const Todos = ({store}) => {

  const handleSubmitForm = e => {
    e.preventDefault();
    const form = (e.currentTarget);
    const todo = new Todo(form.task.value, form.time.value, form.deadline.value);
    if(form.task.value && form.time && form.deadline.value){
      store.addTodo(todo, store.currentProject.id);
      form.reset();
    }
  };

  return (
    <div className='project-todos'>
      <h2>Todos</h2>
      <ol className='todos-list'>
        {store.todos &&
          store.todos.map(todo =>
            <li key={todo.id} className='todo'>
              <input className='todo-input todo-input--checkbox' type='checkbox' onClick={e => store.handleCheck(e, todo.id, store.currentProject.id)}></input>
              <p className='todo-prop todo-prop--task'>{todo.task}</p>
              <p className='todo-prop todo-prop--time'>{todo.time}</p>
              <p className='todo-prop todo-prop--deadline'>{todo.deadline}</p>
              <button className='todo-action todo-action--play' onClick={e => store.timeTodo(e)}></button>
              <button className='todo-action todo-action--remove' onClick={e => store.removeTodo(e)}></button>
            </li>
          )
          }
        {store.currentProject.id &&
          <button className='button--secundairy' onClick={e => store.toggleCheckedTodos(e)}>Show Completed Todo's</button>
        }
        {
          store.showCheckedTodos &&
            store.checkedTodos.map(todo =>
              <li key={todo.id} className='todo'>
                <input className='todo-input todo-input--checkbox' type='checkbox' defaultChecked onClick={e => store.handleCheck(e, todo.id, store.currentProject.id)}></input>
                <p className='todo-prop todo-prop--task'>{todo.task}</p>
                <p className='todo-prop todo-prop--time'>{todo.time}</p>
                <p className='todo-prop todo-prop--deadline'>{todo.deadline}</p>
                <button className='todo-action todo-action--play' onClick={e => store.timeTodo(e)}></button>
                <button className='todo-action todo-action--remove' onClick={e => store.removeTodo(e)}></button>
              </li>
            )
        }
      </ol>
      {
        store.currentProject.id &&
        <form onSubmit={handleSubmitForm} className='addTodo'>
          <input name="task" defaultValue="" type="text" className='addTodo-input addTodo-input--task' placeholder='New todo'/>
          <input name="time" defaultValue="00:00" type="time" className='addTodo-input addTodo-input--time hidden'/>
          <input name="deadline" defaultValue="" type="date" className='addTodo-input addTodo-input--deadline'/>
          <input type="submit" value="+" className='addTodo-input addTodo-input--submit'/>
        </form>
      }

    </div>
  );
};

export default observer(Todos);
