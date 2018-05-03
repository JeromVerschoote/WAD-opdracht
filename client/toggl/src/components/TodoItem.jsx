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

    const {store, project, todo} = this.props;
    const {update, edit} = store;

    edit(todo, this.input.name, this.input.value)
    update(project);

    this.toggleState();
  };

  toggleState = () => {
    const {isEditing} = this.state;

    this.setState({
      isEditing:!isEditing
    })
  }

  renderItem = () => {
    const {store, project, todo} = this.props;
    const {toggleCompleted, timeToDate, removeTodo, update} = store;
    const {task, time, deadline, completed} = todo;
    const {hours, minutes, seconds, counting} = time;

    return(
      <li  className={completed ? `todo completed` : `todo`}>
        <input type='checkbox' onClick={() => {toggleCompleted(todo); update(project)}} className='todo-action'></input>
        <p className='todo-prop todo-prop--task'>{task}</p>
        <p className='todo-prop todo-prop--time'>
          {hours < 10?`0${hours}:`:`${hours}:`}
          {minutes < 10?`0${minutes}:`:`${minutes}:`}
          {seconds < 10?`0${seconds}`:`${seconds}`}
        </p>
        <p className='todo-prop todo-prop--deadline'>{timeToDate(deadline)}</p>

        <button onClick={e => {e.preventDefault(); store.toggleTimer(time)}} className='button--secundairy todo-action'>{counting?`Pause`:`Start`}</button>
        <button onClick={e => {e.preventDefault(); this.toggleState()}} className='button--secundairy todo-action'>Edit</button>
        <button onClick={e => {e.preventDefault(); removeTodo(todo, project); update(project)}} className='button--secundairy button--delete todo-action'>Delete</button>
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
  project: PropTypes.object.isRequired,
  todo: PropTypes.object.isRequired
}

export default observer(TodoItem);
