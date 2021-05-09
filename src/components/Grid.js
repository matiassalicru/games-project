import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router';
import { GamePin } from './GamePin';
import Loading from './Loading';

export const Grid = () => {
    const [games, setGames] = useState([])
    const [loading, setLoading] = useState(false)
    const history = useHistory();
    const params = useParams()

    useEffect(() => {
        setLoading(true);
        fetch(`https://games-library-backend.herokuapp.com/games/${params.page}`)
            .then(res => res.json())
            .then(data => {
                setGames(data)
                setLoading(false)
            });
    }, [params.page])

    const nextPage = () => {
        const page = parseInt(params.page);
        history.push(`/${page + 1}`);
    }

    const prevPage = () => {
        const page = parseInt(params.page);
        if (page > 1) history.push(`/${page - 1}`);
    }

    return (
        <>
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

            { !loading && (
                <div className='grid__buttons animate__animated animate__fadeIn animate__delay-1s'>
                    <button className='grid_btn' onClick={prevPage}>Prev</button>
                    <button className='grid_btn' onClick={nextPage}>Next</button>
                </div>
            )
            }
        </>
    )
};

