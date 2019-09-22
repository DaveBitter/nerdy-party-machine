// Libs
import React, { useContext } from 'react';
import Button from '../../Button/Button';

// Utils
import { AppContext } from '../../../static/js/utils/contexts/Context';

// Components

// Component
const InitialiseGameForm = ({ history }) => {
    const app = useContext(AppContext);
    const handleSubmit = e => {
        e.preventDefault();
        app.initGame(history);
    };

    return (
        <form className='form' onSubmit={handleSubmit}>
            <Button label={`Let's start!`} theme='primary' type='submit' />
        </form>
    );
};

export default InitialiseGameForm;
