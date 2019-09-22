// Libs
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

// Utils

// Components

// Component
/* eslint-disable react/display-name */
const FormItemInput = forwardRef(({ handleChange, label, value }, ref) => {
    return (
        <div className='form__item'>
            {label && <label>{label}</label>}
            <input className='form-item-input' value={value} onChange={({ target }) => handleChange(target.value)} ref={ref}>
            </input>
        </div>
    );
});
/* eslint-enable react/display-name */

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
