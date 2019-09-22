// Libs
import React from 'react';

// Utils

// Components
import InitialiseGameForm from '../../components/Forms/InitialiseGameForm/InitialiseGameForm';

// Component
const Home = ({ history }) => {
    return (
        <main className='home'>
            <InitialiseGameForm history={history} />
        </main>
    );
};

export default Home;
