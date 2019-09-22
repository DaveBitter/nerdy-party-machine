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
        <>
            <h1 className='h2'>{`Let's play some Nerdy Party Machine!`}</h1>
            <p>The rules are simple:</p>
            <ul>
                <li>You enter a word that could be an NPM package without looking it up</li>
                <li>Everybody drinks if there is a package on <a href='http://npmjs.com' target='_blank' rel='noopener noreferrer'>npmjs.com</a></li>
            </ul>
            <form className='form' onSubmit={handleSubmit}>
                <Button label={`Let's start!`} theme='primary' type='submit' />
            </form>
        </>
    );
};

export default InitialiseGameForm;
