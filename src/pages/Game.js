import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

export const Game = () => {
    const [gameDetails, setGameDetails] = useState({})

    const gameID = useParams();

    useEffect(() => {
        fetch(`https://games-library-backend.herokuapp.com/game/${gameID.game}`)
            .then(res => res.json())
            .then(data => setGameDetails(data))

    }, [gameID])

    return (
        <div className='game__main'>
            <header>
                <img className="game__header" src={gameDetails.background_image_additional} alt="header of the game" />
            </header>
            <article className='game__description'>
                <div className='game__description_cover'>
                    <img className='game__cover' src={gameDetails.background_image} alt="portada" />
                    <h1 className='game__title'>{gameDetails.name}</h1>
                </div>
                <p className='game__description_text' dangerouslySetInnerHTML={{ __html: gameDetails.description }} />
            </article>
        </div>
    )
}
