import React from 'react'
import { GamePin } from './GamePin';

export const Grid = () => {
    const games = [{ title: 'game1' }, { title: 'game2' }, { title: 'game3' }, { title: 'game4' }];

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
}
