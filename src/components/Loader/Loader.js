// Libs
import React from 'react';
import PropTypes from 'prop-types';

// Utils

// Components

// Component
const Loader = ({ tstId }) => {
    return (
        <div className='loader' data-test-id={tstId}>
            <div className='loader__spinner' />
        </div>
    );
};

const { string } = PropTypes;

Loader.propTypes = {
    tstId: string
};

export default Loader;
