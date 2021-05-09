import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Loading from '../components/Loading';

export const Game = () => {
    const [gameDetails, setGameDetails] = useState({})
    const [loading, setLoading] = useState(false)


    const gameID = useParams();

    useEffect(() => {
        setLoading(true)
        fetch(`https://games-library-backend.herokuapp.com/games/game/${gameID.game}`)
            .then(res => res.json())
            .then(data => {
                setGameDetails(data)
                setLoading(false)
            })

    }, [gameID])

    return (
        <>
            {
                !loading ? (
                    <div className='game__main animate__animated animate__fadeIn'>
                        <header>
                            <img className="game__header animate__animated animate__fadeIn" src={gameDetails.background_image_additional} alt="header of the game" />
                        </header>
                        <article className='game__description'>
                            <div className='game__description_cover'>
                                <img className='game__cover' src={gameDetails.background_image} alt="portada" />
                                <h1 className='game__title'>{gameDetails.name}</h1>
                            </div>
                            <p className='game__description_text' dangerouslySetInnerHTML={{ __html: gameDetails.description }} />
                        </article>
                    </div>) : (
                    <div className='game__main'>
                        <Loading/>
                    </div>
                )
            }
        </>
    )
}
