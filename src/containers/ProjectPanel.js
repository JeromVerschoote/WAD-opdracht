import React, { Component } from "react";

import store from '../store';

import TodosSection from "../containers/TodosSection";
import ProjectSelector from "../components/ProjectSelector";
import Details from "../components/Details";

class ProjectPanel extends Component {
  render() {
    const {project} = this.props;

    return (
      <section className='project'>
        <ProjectSelector store={store} />
        {
          project?
          <div>
            <Details store={store} project={project} parentArray={store.projects}/>
            <TodosSection store={store} project={project}/>
          </div>
          :store.projects[0]?<p className='ifEmpty'>Select a project to manage its todo's.</p>:<p className='ifEmpty'>Go ahead and make your first project!</p>
        }
      </section>
    );
  }
}

export default ProjectPanel;
