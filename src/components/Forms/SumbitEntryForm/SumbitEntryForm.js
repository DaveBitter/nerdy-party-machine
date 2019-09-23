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
    const input = useRef();

    useEffect(() => input.current.focus(), []);

    const handleSubmit = e => {
        e.preventDefault();

        query(`https://api.npms.io/v2/package/${entryValue}`)
            .then(({ response, result }) => {
                const exists = response.status === 200;

                app.handleGameChoice({ packageName: entryValue, meta: result, exists });
                setEntryValue('');
                input.current.focus();
            })
            .catch(err => console.error(err));
    };

    const handleChange = val => setEntryValue(val);

    return (
        <form className='form' onSubmit={handleSubmit}>
            <FormItemInput label='Package name' value={entryValue} handleChange={handleChange} ref={input} />
            <div className='button-group'>
                <Button label='Go!' theme='primary' type='submit' />
            </div>
        </form>
    );
};

export default SumbitEntryForm;
