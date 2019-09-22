// Libs
import React from 'react';
import PropTypes from 'prop-types';

// Utils

// Components

// Component
const FormItemInput = ({ handleChange, label, value }) => {
    return (
        <div className='form__item'>
            {label && <label>{label}</label>}
            <input className='form-item-input' value={value} onChange={({ target }) => handleChange(target.value)}>
            </input>
        </div>
    );
};

// Default props
FormItemInput.defaultProps = {
    handleChange: () => { },
    value: ''
};

const { func, string } = PropTypes;

FormItemInput.propTypes = {
    handleChange: func,
    label: string,
    value: string
};


export default FormItemInput;
