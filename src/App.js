import React, { Component } from 'react';
import './App.css';
//
import InputField from './InputField.jsx';

class App extends Component {
  constructor(){
    super();
    this.state = {value: 0};
  }

  _handleChangeSlider = (value) => {
    this.setState({value});
  }

  render() {
    const {value} = this.state;
    return (
      <div>
        <InputField onChange={value => this._handleChangeSlider(value)} value={value}/>
      </div>
    );
  }
}

export default App;
