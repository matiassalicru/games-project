import React, { useEffect, useState } from 'react'
import { GamePin } from './GamePin';

export const Grid = () => {
    const [games, setGames] = useState([{ title: 'game1' }, { title: 'game2' }, { title: 'game3' }, { title: 'game4' }])

    useEffect(() => {
        fetch('https://games-library-backend.herokuapp.com/games')
            .then(res => res.json())
            .then(data => {
                setGames(data)
            });
    }, [])





    return (
        <section className='grid__main'>
            {
                games.map((game, i) => {
                    return (
                        <GamePin key={i} game={game} />
                    )
                })
            }
        </section>
    )
};

