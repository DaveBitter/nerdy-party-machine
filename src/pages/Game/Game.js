// Libs
import React, { useContext, useEffect } from 'react';

// Utils
import { AppContext } from '../../static/js/utils/contexts/Context';


// Components
import AnimationWrapper from '../../components/AnimationWrapper/AnimationWrapper';
import Card from '../../components/Card/Card';
import GameScore from '../../components/GameScore/GameScore';
import PackageMetadata from '../../components/PackageMetadata/PackageMetadata';
import SumbitEntryForm from '../../components/Forms/SumbitEntryForm/SumbitEntryForm';

// Component
const Home = ({ match }) => {
    const app = useContext(AppContext);

    useEffect(() => {
        app.setInitialGameData(match.params.uid);
    }, []);

    return (
        <AnimationWrapper element='main' className='game grid'>
            <section className='section g4'>
                <Card>
                    <SumbitEntryForm />
                </Card>
            </section>

            {app.lastValidatedChoice && <section className='section g4'>
                <Card>
                    <PackageMetadata pckg={app.lastValidatedChoice} />
                </Card>
            </section>}

            <section className='section g4'>
                <GameScore />
            </section>
        </AnimationWrapper>
    );
};

export default Home;
