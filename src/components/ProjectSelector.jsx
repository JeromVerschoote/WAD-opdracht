import React from "react";
import { Link} from "react-router-dom";
import PropTypes from "prop-types";
import {observer} from 'mobx-react';

const ProjectSelector = ({store}) => {

  /*const handleChangeForm = e => {
     currentProject = object ipv (-> geen find index by id functies);

    store.currentProject.id = e.currentTarget.options[e.currentTarget.selectedIndex].value;
    if(store.currentProject.id){
      store.getTodos(store.currentProject.id);
    }
    window.location.replace(`/home/project/${id}`);
  };*/

  return (
    <div className='project-selector'>
      {
        /* <form >
          <select onChange={handleChangeForm}>

            {
              store.projects.map(project =>
                <option value={project.id}>{project.name}</option>
              )
            }
          </select>
        </form> */
      }
      {
        store.projects.map(project =>
          <Link to={`/home/project/` + project.id} onClick={() => store.getTodos(project.id)} key={project.id}>
            <p>{project.name}</p>
          </Link>
        )
      }
    </div>
  );
};

ProjectSelector.propTypes = {
  store: PropTypes.object.isRequired
}

export default observer(ProjectSelector);
