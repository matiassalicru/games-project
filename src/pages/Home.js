import React from 'react';
import { Grid } from '../components/Grid';
import { Searchbar } from '../components/Searchbar';

export const Home = () => {
    
    return (
        <div className='home__main'>
            <Searchbar />
            <Grid />
        </div>
    )
}
