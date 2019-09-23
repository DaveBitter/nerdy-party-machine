// Libs
import React, { useContext, useEffect, useState } from 'react';

// Utils
import { AppContext } from '../../static/js/utils/contexts/Context';

// Components
import AnimationWrapper from '../AnimationWrapper/AnimationWrapper';
import Card from '../Card/Card';

// Component
const GameScore = () => {
    const { gameData } = useContext(AppContext);
    const [score, setScore] = useState();

    useEffect(() => {
        const exists = gameData.choices.filter(choice => choice.exists).length;
        setScore({ exists, notExists: gameData.choices.length - exists });
    }, [gameData.choices]);


    return (
        <>
            {score && <AnimationWrapper className='game-score'>
                <div className='game-score__item'>
                    <Card>
                        <h2 className='game-score__heading'>Exists</h2>
                        <p className='game-score__value h3'>{score.exists}</p>
                    </Card>
                </div>
                <div className='game-score__item'>
                    <Card>
                        <h2 className='game-score__heading'>Does not exist</h2>
                        <p className='game-score__value h3'>{score.notExists}</p>
                    </Card>
                </div>
            </AnimationWrapper>}
        </>
    );
};

export default GameScore;
