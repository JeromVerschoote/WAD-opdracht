import React, { Component } from 'react';
import './App.css';
//
import TodoInputField from './TodoInputField';

class AddTodo extends Component {
  constructor(){
    super();
    this.state = {
        task: '',
        project: '',
        client: '',
        rate: '',
        deadline: '',
        link: ''
    }
  };

  handleInputField = (field, value) => {
    this.setState({ [field]: value });
  };

  handleClickButton = () => {
    this.props.onAddTodo(this.state);
  }

  render() {
    return (
      <div className='newTodo-form'>
        { Object.keys(this.state).map(
          key =>  <TodoInputField value={this.state[key]} key={key} onChange={e => this.handleInputField(key, e)} placeholder={key}/>
        )}
        <button onClick={this.handleClickButton} className='newTodo-button'>+</button>
      </div>
    );
  }
}

export default AddTodo;
