import React, {Component} from "react";
import PropTypes from "prop-types";
import {observer} from 'mobx-react';

class TodoItem extends Component {

  constructor(props){
    super(props)

    this.state = {
      isEditing:false
    }
  }

  update = e => {
    e.preventDefault();

    const {index, parentArray} = this.props;
    const {editItem} = this.props.store;

    editItem(index, parentArray, this.input.name, this.input.value);
    this.toggleState();
  };

  toggleState = () => {
    const {isEditing} = this.state;

    this.setState({
      isEditing:!isEditing
    })
  }

  renderItem = () => {
    const {task, time, deadline, completed} = this.props.todo;
    const {deleteItem, toggleProperty, timeToDate} = this.props.store;
    const {index, parentArray} = this.props;

    return(
      <li  className={completed ? `todo completed` : `todo`}>
        <input type='checkbox' onClick={() => toggleProperty(index, parentArray, `completed`)} className='todo-action'></input>
        <p className='todo-prop todo-prop--task'>{task}</p>
        <p className='todo-prop todo-prop--time'>
          {time.hours < 10?`0${time.hours}:`:`${time.hours}:`}
          {time.minutes < 10?`0${time.minutes}:`:`${time.minutes}:`}
          {time.seconds < 10?`0${time.seconds}`:`${time.seconds}`}
        </p>
        <p className='todo-prop todo-prop--deadline'>{timeToDate(deadline)}</p>

        <button onClick={e => {e.preventDefault(); time.toggleState()}} className='button--secundairy todo-action'>{time.counting?`Pause`:`Start`}</button>
        <button onClick={e => {e.preventDefault(); this.toggleState()}} className='button--secundairy todo-action'>Edit</button>
        <button onClick={e => {e.preventDefault(); deleteItem(index, parentArray)}} className='button--secundairy button--delete todo-action'>Delete</button>
      </li>
    );
  };

  renderForm = () => {
    const {todo} = this.props;
    return(
      <form onSubmit={this.update} className='todo'>
        <input type="text" ref={(value) => {this.input = value}} defaultValue={todo.name} placeholder={todo.name} name='task' className='todo-prop--input'/>
        <button type="submit" className='todo-action button--secundairy'>Save changes</button>
      </form>
    )
  };

  render(){
    const {isEditing} = this.state;
    return <React.Fragment>{isEditing ? this.renderForm() :  this.renderItem()}</React.Fragment>;
  }
};

TodoItem.propTypes = {
  store: PropTypes.object.isRequired,
  todo: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  parentArray: PropTypes.object.isRequired
}

export default observer(TodoItem);
