import React from 'react'

export const GamePin = ({game}) => {
    
    return (
        <div className="gamepin__main">
            <img className='gamepin__img' src="" alt="thumbnail"/>
            <h3 className="gamepin__title">{game.title}</h3>
        </div>
    )
}
