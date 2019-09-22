// Libs
import React, { useContext, useEffect } from 'react';

// Utils
import { AppContext } from '../../static/js/utils/contexts/Context';


// Components
import GameScore from '../../components/GameScore/GameScore';
import SumbitEntryForm from '../../components/Forms/SumbitEntryForm/SumbitEntryForm';

// Component
const Home = ({ match }) => {
    const app = useContext(AppContext);

    useEffect(() => {
        app.setInitialGameData(match.params.uid);
    }, []);

    return (
        <main className='game'>
            <SumbitEntryForm />
            <GameScore />
        </main>
    );
};

export default Home;
