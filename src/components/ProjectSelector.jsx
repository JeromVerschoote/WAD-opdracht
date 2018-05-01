import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {observer} from 'mobx-react';

const ProjectSelector = ({store}) => {
  const {projects} = store;
  return (
    <div className='project-selector'>
      {
        projects.map(project =>
          <Link to={`/home/project/${project._id}`} key={project.id}>
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
