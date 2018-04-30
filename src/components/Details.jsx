import React from "react";
import PropTypes from "prop-types";
import {observer} from 'mobx-react';

const Details = ({store, project}) => {
  const {name, client, deadline} = project;

  return (
    <div className='project-details'>
      <p className='project-details-deadline'>{deadline}</p>
      <h2>{name}</h2>
      <p className='project-details-client'>{client}</p>
    </div>
  );
};

Details.propTypes = {
  store: PropTypes.object.isRequired,
  project: PropTypes.object.isRequired
}

export default observer(Details);
