import React from "react";
import PropTypes from "prop-types";
import {observer} from 'mobx-react';

const ProjectSelector = ({store}) => {

  const handleChangeForm = e => {
    // currentProject = object ipv (-> geen find index by id functies);
    store.currentProject.id = e.currentTarget.options[e.currentTarget.selectedIndex].value;
    if(store.currentProject.id){
      store.getTodos(store.currentProject.id);
    }else{
      console.log(`no todos`)
    }
  };

  return (
    <div className='project-selector'>
      <form >
        <select onChange={handleChangeForm}>
          <option>Select a project</option>
          {
            store.projects.map(project =>
              <option value={project.id} key={project.id}>{project.name}</option>
            )
          }
        </select>
      </form>
      <p>Client</p>
    </div>
  );
};

ProjectSelector.propTypes = {
  store: ProjectSelector.object.isRequired
}

export default observer(ProjectSelector);
