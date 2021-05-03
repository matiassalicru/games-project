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
        <div className="gamepin__main" onClick={linkToGame}>
            <img className='gamepin__img' src={game.background_image} alt="thumbnail" />
            <h3 className="gamepin__title">{game.name}</h3>
        </div>
    )
}
