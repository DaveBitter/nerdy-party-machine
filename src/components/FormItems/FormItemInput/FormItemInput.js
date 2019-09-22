// Libs
import React from 'react';
import PropTypes from 'prop-types';

// Utils

// Components

// Component
const FormItemInput = ({ label }) => {
    return (
        <div className='form__item'>
            {label && <label>{label}</label>}
            <input className='form-item-input'>
            </input>
        </div>
    );
};

// Default props
FormItemInput.defaultProps = {
};

const { string } = PropTypes;

FormItemInput.propTypes = {
    label: string
};


export default FormItemInput;
