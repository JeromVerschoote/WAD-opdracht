import React from "react";
import {observer} from 'mobx-react';
import Todo from '../models/Todo';

let currentProject;

const AllTodos = ({store}) => {

  const handleChangeForm = e => {
    currentProject = e.currentTarget.options[e.currentTarget.selectedIndex].value;
    if(currentProject){
      store.getTodos(currentProject);
    }else{
      console.log(`no todos`)
    }
  };

  const handleSubmitForm = e => {
    e.preventDefault();
    const form = (e.currentTarget);
    const todo = new Todo(form.task.value, form.time.value, form.deadline.value);
    if(form.task.value && form.time && form.deadline.value){
      store.addTodo(todo, currentProject);
      form.reset();
    }
  };

  return (
    <section className='panel-management-all'>
      <h2>Projects</h2>
      <form>
        <select onChange={handleChangeForm} className='managementAll-form--project'>
          <option>Select a project</option>
          {
            store.projects.map(project =>
              <option value={project.id} key={project.id}>{project.name} - {project.client}</option>
            )
          }
        </select>
      </form>
      <ol className='managementAll-list'>
        {store.todos &&
          store.todos.map(todo =>
            <li key={todo.id} className='managementAll-list-item'>
              <input className='managementAll-list-item-action managementAll-list-item-action--checkbox' type='checkbox' onClick={e => store.handleCheck(e, todo.id, currentProject)}></input>
              <p className='managementAll-list-item-prop managementAll-list-item-prop--task'>{todo.task}</p>
              <p className='managementAll-list-item-prop managementAll-list-item-prop--time'>{todo.time}</p>
              <p className='managementAll-list-item-prop managementAll-list-item-prop--deadline'>{todo.deadline}</p>
              <button className='managementAll-list-item-action managementAll-list-item-action--play' onClick={e => store.timeTodo(e)}></button>
              <button className='managementAll-list-item-action managementAll-list-item-action--remove' onClick={e => store.removeTodo(e)}></button>
            </li>
          )
          }
        {currentProject &&
          <button className='managementAll-show' onClick={e => store.toggleCheckedTodos(e)}>Show Completed Todo's</button>
        }
        {
          store.showCheckedTodos &&
            store.checkedTodos.map(todo =>
              <li key={todo.id} className='managementAll-list-item'>
                <input className='managementAll-list-item-action managementAll-list-item-action--checkbox' type='checkbox' defaultChecked onClick={e => store.handleCheck(e, todo.id, currentProject)}></input>
                <p className='managementAll-list-item-prop managementAll-list-item-prop--task'>{todo.task}</p>
                <p className='managementAll-list-item-prop managementAll-list-item-prop--time'>{todo.time}</p>
                <p className='managementAll-list-item-prop managementAll-list-item-prop--deadline'>{todo.deadline}</p>
                <button className='managementAll-list-item-action managementAll-list-item-action--play' onClick={e => store.timeTodo(e)}></button>
                <button className='managementAll-list-item-action managementAll-list-item-action--remove' onClick={e => store.removeTodo(e)}></button>
              </li>
            )
        }
      </ol>
      {
        currentProject &&
        <form onSubmit={handleSubmitForm} className='managementAll-form-todo'>
          <input name="task" defaultValue="" type="text" className='managementAll-form-todo-input managementAll-form-todo-input--task' placeholder='New todo'/>
          <input name="time" defaultValue="00:00" type="time" className='managementAll-form-todo-input managementAll-form-todo-input--time hidden'/>
          <input name="deadline" defaultValue="" type="date" className='managementAll-form-todo-input managementAll-form-todo-input--deadline'/>
          <input type="submit" value="+" className='managementAll-form-todo-input managementAll-form-todo-input--submit'/>
        </form>
      }

    </section>
  );
};

export default observer(AllTodos);
