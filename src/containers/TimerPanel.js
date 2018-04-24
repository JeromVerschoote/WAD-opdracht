import React, { Component } from "react";
import store from '../store';

import Infographic from "../components/Infographic";
import Records from "../components/Records";

class TimerPanel extends Component {
  render() {
    return (
      <section className='timer'>
        <Infographic strore={store}/>
        <Records strore={store}/>
      </section>
    );
  }
}

export default TimerPanel;
