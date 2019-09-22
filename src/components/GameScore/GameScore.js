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
        const right = gameData.choices.filter(choice => choice.exists).length;
        setScore({ right, wrong: gameData.choices.length - right });
    }, [gameData.choices.length]);


    return (
        <>
            {score && <AnimationWrapper className='game-score'>
                <div className='game-score__item'>
                    <Card>
                        <h2 className='game-score__heading'>Right</h2>
                        <p className='game-score__value h3'>{score.right}</p>
                    </Card>
                </div>
                <div className='game-score__item'>
                    <Card>
                        <h2 className='game-score__heading'>Wrong</h2>
                        <p className='game-score__value h3'>{score.wrong}</p>
                    </Card>
                </div>
            </AnimationWrapper>}
        </>
    );
};

export default GameScore;
