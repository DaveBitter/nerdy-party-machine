// Libs
import React, { useContext, useEffect, useState } from 'react';

// Utils
import { AppContext } from '../../static/js/utils/contexts/Context';

// Components

// Component
const GameScore = () => {
    const { gameData } = useContext(AppContext);
    const [score, setScore] = useState({});

    useEffect(() => {
        const right = gameData.choices.filter(choice => choice.exists).length;
        setScore({ right, wrong: gameData.choices.length - right });
    }, [gameData.choices.length]);


    return (
        <div className='game-score'>
            <h2>Right: {score.right}</h2>
            <h2>Wrong: {score.wrong}</h2>
        </div>
    );
};

export default GameScore;
