import React from "react";
import {observer} from 'mobx-react';

const Details = ({store}) => {
  return (
    <div className='project-details'>
      <p>Project Details (being built)</p>
    </div>
  );
};

export default observer(Details);
