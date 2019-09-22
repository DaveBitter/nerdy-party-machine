// Libs
import React from 'react';

// Utils

// Components
import AnimationWrapper from '../../components/AnimationWrapper/AnimationWrapper';
import Card from '../../components/Card/Card';
import InitialiseGameForm from '../../components/Forms/InitialiseGameForm/InitialiseGameForm';

// Component
const Home = ({ history }) => {
    return (
        <AnimationWrapper element='main' className='home grid'>
            <section className='section g4'>
                <Card>
                    <InitialiseGameForm history={history} />
                </Card>
            </section>
        </AnimationWrapper>
    );
};

export default Home;
