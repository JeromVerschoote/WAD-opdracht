import React from 'react';
//import PropTypes from 'prop-types';

const TodoInputField = ({value, onChange, placeholder}) => {

  const inputField = e => {
    const {value} = e.currentTarget
    onChange(value);
  }

  return(
    <input placeholder={placeholder} value={value} onChange={inputField} className='newTodo-input'/>
  )
}

export default TodoInputField;
