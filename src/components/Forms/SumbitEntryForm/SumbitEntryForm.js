// Libs
import React, { useContext, useState } from 'react';
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

    const handleSubmit = e => {
        e.preventDefault();
        query(`https://api.npms.io/v2/package/${entryValue}`)
            .then(({ response }) => {
                const exists = response.status === 200;

                app.handleGameChoice({ packageName: entryValue, exists });
                setEntryValue('');
            })
            .catch(err => console.error(err));
    };

    const handleChange = val => setEntryValue(val);

    return (
        <form className='form' onSubmit={handleSubmit}>
            <FormItemInput label='Package name' value={entryValue} handleChange={handleChange} />
            <Button label='Go!' theme='primary' type='submit' />
        </form>
    );
};

export default SumbitEntryForm;
