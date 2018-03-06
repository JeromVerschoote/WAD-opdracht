import React from 'react';
import PropTypes from 'prop-types';

const SliderLabel = ({value}) => {
        return (
            <span>You spend € {value} today.</span>
        );
}

SliderLabel.propTypes = {
    value: PropTypes.number.isRequired
}

export default SliderLabel;