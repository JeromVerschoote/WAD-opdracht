import React from 'react';
import PropTypes from 'prop-types';

let listItems = {};

const TodoList = ({newTodo}) => {

  const index = Object.keys(listItems).length;
  const $nul = document.getElementById('0');
  listItems[index] = newTodo;

  const removeItemFromList = (e, key) => {
    delete listItems[key];
    const $list = document.getElementById(key);
    $list.remove();
    renderList();
  }

  const renderList = () => {

    if($nul){
      $nul.classList.add(`hidden`);
    }

    return(
      <ol className='todo-list'>
        {Object.keys(listItems).map(
          key =>
          <li key={key} className='todo-item' id={key}>
            <ul className='todo-item-list'>
              <li className='todo-task'>{listItems[key].task}</li>
              <li className='todo-project'><span>{listItems[key].project}</span> &#8226; {listItems[key].client}</li>
              <li>€ {listItems[key].rate},-/h</li>
              <li>{listItems[key].deadline}</li>
              <li>{listItems[key].link}</li>
            </ul>
            <button className='todo-delete' onClick={e => removeItemFromList(e, key)}>x</button>
          </li>
        )}
      </ol>
    )
  }

  if(index){
    if(index > 0){
      return(renderList())
    }else{
      return(<p>Je hebt nog geen todo's. Voeg er snel één toe!</p>)
    }
  }else{
    return(<p>Je hebt nog geen todo's. Voeg er snel één toe!</p>)
  }

}

export default TodoList;
