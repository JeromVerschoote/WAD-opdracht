import React, { Component } from "react";
import store from '../store';

import ProjectSelector from "../components/ProjectSelector";
import Details from "../components/Details";
import Todos from "../components/Todos";

class ProjectPanel extends Component {
  render() {
    return (
      <section className='project'>
        <ProjectSelector store={store} />
        {
          store.projectSelected?
          <div>
            <Details store={store}/>
            <Todos store={store}/>
          </div>
          :<p>Please select a project</p>
        }
      </section>
    );
  }
}

export default ProjectPanel;
