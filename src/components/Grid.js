import React, { useEffect, useState } from 'react'
import { useHistory, useLocation, useParams } from 'react-router';
import { GamePin } from './GamePin';
import Loading from './Loading';

export const Grid = () => {
    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isSearchPage, setIsSearchPage] = useState(false);
    const history = useHistory();
    const querySearch = useLocation().search;
    const params = useParams();

    const search = new URLSearchParams(querySearch).get('search');

    useEffect(() => {
        setLoading(true);
        if (search) {
            setIsSearchPage(true);
            fetch(`https://games-library-backend.herokuapp.com/search/${search}`)
                .then(res => res.json())
                .then(data => {
                    setGames(data)
                    setLoading(false)
                });
        }
    }, [search])


    useEffect(() => {
        setLoading(true);
        if (!search) {
            setIsSearchPage(false);
            fetch(`https://games-library-backend.herokuapp.com/games/${params.page}`)
                .then(res => res.json())
                .then(data => {
                    setGames(data)
                    setLoading(false)
                });
        }
    }, [params.page, search])

    const nextPage = () => {
        const page = parseInt(params.page);
        history.push(`/games/${page + 1}`);
    }

    const prevPage = () => {
        const page = parseInt(params.page);
        if (page > 1) history.push(`/games/${page - 1}`);
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

            { !loading && !isSearchPage && (
                <div className='grid__buttons animate__animated animate__fadeIn animate__delay-1s'>
                    <button className='grid_btn' onClick={prevPage}>Prev</button>
                    <button className='grid_btn' onClick={nextPage}>Next</button>
                </div>
            )
            }
        </>
    )
};

