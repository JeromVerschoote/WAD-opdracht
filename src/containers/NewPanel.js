import React, { Component } from "react";
import store from '../store';

import AddProject from "../components/AddProject";

class NewPanel extends Component {
  render() {
    return (
      <section className='new'>
        <AddProject store={store}/>
      </section>
    );
  }
}

export default NewPanel;
