import React, { Component } from "react";
import store from '../store';
import Nav from "../components/Nav";

class Navigation extends Component {

  render() {
    return (
      <div className='application-navigation'>
        <h2>toggl 2.0</h2>
        <Nav store={store}/>
      </div>
    );
  }
}

export default Navigation;
