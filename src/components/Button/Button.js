// Libs
import React from 'react';
import PropTypes from 'prop-types';

// Utils

// Components

// Helpers
const getClassNames = theme => {
    let className = 'button';
    if (theme) { className = `${className} ${className}--${theme}`; }

    return className;
};

// Component
const Button = ({ label, theme, type }) => {
    return (
        <button className={getClassNames(theme)} type={type}>
            {label}
        </button>
    );
};

// Default props
Button.defaultProps = {
    type: 'button'
};

const { oneOf, string } = PropTypes;

Button.propTypes = {
    label: string.isRequired,
    theme: string,
    type: oneOf(['button', 'submit'])
};


export default Button;
