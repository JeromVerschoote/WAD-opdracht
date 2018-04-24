import React from "react";
import PropTypes from "prop-types";
import {observer} from 'mobx-react';

const Records = ({store}) => {
  return (
    <div className='timer-records'>
      <p>Timer Records (being built)</p>
    </div>
  );
};

Records.propTypes = {
  store: PropTypes.object.isRequired
}

export default observer(Records);
