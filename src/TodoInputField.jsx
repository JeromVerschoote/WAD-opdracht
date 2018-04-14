import React from 'react';
import PropTypes from 'prop-types';

const TodoInputField = ({value, onInput, placeholder}) => {

  const inputField = e => {
    const {value} = e.currentTarget
    onInput(value);
  }

  return(
    <input placeholder={placeholder} value={value} onInput={inputField} className='newTodo-input'/>
  )
}

TodoInputField.propTypes = {

}

export default TodoInputField;
