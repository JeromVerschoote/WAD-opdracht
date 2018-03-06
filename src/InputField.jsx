import React from 'react';
import PropTypes from 'prop-types';
//
import InputFieldLabel from './InputFieldLabel.jsx';

const InputField = ({value, onChange}) => {

    const _handleChange = e => {
        const {value} = e.currentTarget;
        onChange(value); // value naar App.js sturen via persoonlijk aangemaakte property 'onChange'; kan evengoed 'onBanaan zijn'
    }

    return (
        <label>
            <input type='text' onChange={_handleChange} value={value}/>
            <InputFieldLabel value={value}/>
        </label>
        );
};

InputField.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.number.isRequired
}

export default InputField;