import React from "react";
import PropTypes from "prop-types";
import {observer} from 'mobx-react';

const Infographic = ({store}) => {
  return (
    <div className='timer-infographic'>
      <p>Timer Infographic (being built)</p>
    </div>
  );
};

Infographic.propTypes = {
  store: Infographic.object.isRequired
}

export default observer(Infographic);
