import React from "react";
import PropTypes from "prop-types";
import {observer} from 'mobx-react';

const Infographic = ({store}) => {
  return (
    <div className='timer-infographic'>
      {
        // diagram of this weeks projects
      }
    </div>
  );
};

Infographic.propTypes = {
  store: PropTypes.object.isRequired
}

export default observer(Infographic);
