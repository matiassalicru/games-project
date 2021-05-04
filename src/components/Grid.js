import React, { useEffect, useState } from 'react'
import { GamePin } from './GamePin';
import Loading from './Loading';

export const Grid = () => {
    const [games, setGames] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true);
        fetch('https://games-library-backend.herokuapp.com/games')
            .then(res => res.json())
            .then(data => {
                setGames(data)
                setLoading(false)
            });
    }, [])

    return (
        <section className='grid__main'>
            {
                !loading ?
                    games.map((game, i) => {
                        return (
                            <GamePin key={i} game={game} />
                        )
                    }) : (
                        <Loading />
                    )
            }
        </section>
    )
};

