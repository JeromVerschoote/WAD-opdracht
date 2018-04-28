import React, { Component } from "react";
import store from '../store';
import Nav from "../components/Nav";

class Navigation extends Component {

  render() {
    return (
      <div className='application-navigation'>
        <Nav store={store}/>
      </div>
    );
  }
}

export default Navigation;
