import React from 'react';
import PropTypes from 'prop-types';

let listItems = {};

const TodoList = ({newTodo}) => {

  const index = Object.keys(listItems).length;

  listItems[index] = newTodo;
  console.log(index);
  console.log(newTodo);

  if(Object.keys(listItems).length > 1){
    return(
      <ol className='todo-list'>
        {Object.keys(listItems).map(
          key =>
          <li key={key} className='todo-item'>
            <ul className='todo-item-list'>
              <li>Task: {listItems[key].task}</li>
              <li>Project: {listItems[key].project}</li>
              <li>Client: {listItems[key].client}</li>
              <li>Rate: {listItems[key].rate}</li>
              <li>Deadline: {listItems[key].deadline}</li>
              <li>Link: {listItems[key].link}</li>
            </ul>
          </li>
        )}
      </ol>
    )}else{
      return(<p>Geen todo's</p>)
    }
  }

  TodoList.propTypes = {

  }

  export default TodoList;
