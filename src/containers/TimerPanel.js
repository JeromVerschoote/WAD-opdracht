import React, { Component } from "react";
import store from '../store';

import Infographic from "../components/Infographic";
import Records from "../components/Records";

class TimerPanel extends Component {
  render() {
    return (
      <section className='timer'>
        <Infographic store={store}/>
        <Records store={store}/>
      </section>
    );
  }
}

export default TimerPanel;
