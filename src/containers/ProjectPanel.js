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
          :store.projects[0]?<p>Select a project to manage its todo's.</p>:<p>Go ahead and make your first project!</p>
        }
      </section>
    );
  }
}

export default ProjectPanel;
