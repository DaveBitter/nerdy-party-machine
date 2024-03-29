// Libs
import React, { useContext, useEffect, useRef, useState } from 'react';
import Button from '../../Button/Button';

// Utils
import { AppContext } from '../../../static/js/utils/contexts/Context';
import query from '../../../static/js/utils/query';

// Components
import FormItemInput from '../../FormItems/FormItemInput/FormItemInput';

// Component
const SumbitEntryForm = () => {
    const app = useContext(AppContext);
    const [entryValue, setEntryValue] = useState('');
    const [error, setError] = useState();
    const input = useRef();

    useEffect(() => input.current.focus(), []);

    const handleSubmit = e => {
        e.preventDefault();
        setError();
        setEntryValue('');
        input.current.blur();

        if (app.gameData.choices.find(choice => choice.packageName === entryValue)) { return setError(`You've already entered this package`); }

        query(`https://api.npms.io/v2/package/${entryValue}`)
            .then(({ response, result }) => {
                const exists = response.status === 200;

                app.handleGameChoice({ packageName: entryValue, meta: result, exists });
            })
            .catch(err => console.error(err));
    };

    const handleChange = val => setEntryValue(val.replace(' ', '-').toLowerCase());

    return (
        <form className='form' onSubmit={handleSubmit}>
            <FormItemInput label='Package name' value={entryValue} handleChange={handleChange} ref={input} />
            {error && <p className='form__error'>{error}</p>}
            <div className='button-group'>
                <Button label='Go!' theme='primary' type='submit' />
            </div>
        </form>
    );
};

export default SumbitEntryForm;
