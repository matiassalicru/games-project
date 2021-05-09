import React from 'react';
import {
    useHistory
} from "react-router-dom";

export const GamePin = ({ game }) => {
    const history = useHistory();

    const linkToGame = () => {
        history.push(`/games/${game.id}`);
    }

    return (
        <div className='gamepin__main animate__animated animate__fadeIn' onClick={linkToGame}>
            <img className='gamepin__img animate__animated animate__fadeIn' src={game.background_image} alt="thumbnail" />
            <h3 className='gamepin__title animate__animated animate__fadeIn'>{game.name}</h3>
        </div>
    )
}
