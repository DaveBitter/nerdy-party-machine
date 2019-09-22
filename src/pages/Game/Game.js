// Libs
import React, { useContext, useEffect } from 'react';

// Utils
import { AppContext } from '../../static/js/utils/contexts/Context';


// Components

// Component
const Home = ({ match }) => {
    const app = useContext(AppContext);

    useEffect(() => {
        app.setInitialGameData(match.params.uid);
    }, []);

    return (
        <main className='game'>
        </main>
    );
};

export default Home;
