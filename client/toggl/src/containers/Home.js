import React, { Component } from "react";

import NewPanel from "../containers/NewPanel";
import ProjectPanel from "../containers/ProjectPanel";
import TimerPanel from "../containers/TimerPanel";

class Home extends Component {
  render() {
    return (
        <div className='application-content'>
        <NewPanel />
        <div className='content-container'>
          <ProjectPanel />
          <TimerPanel />
        </div>
      </div>
    );
  }
}

export default Home;