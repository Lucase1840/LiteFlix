import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMovies } from '../../redux/actions';
import Card from '../Card/Card.jsx'
import Box from '@mui/material/Box';
function Home() {
    const dispatch = useDispatch();
    const popularMovies = useSelector(state => state.popularMovies)

    useEffect(() => {
        // dispatch(getMovies())
    }, [dispatch]);

    console.log(popularMovies)
    return (
        <Box sx={{ display: "flex", flexDirection: "column", p: 0 }}>
            {popularMovies.length ? popularMovies.map((movie, i) => {
                return (
                    <Card
                        key={i}
                        title={movie.title}
                        votes={movie.vote_average}
                        year={movie.release_date}
                        image={movie.backdrop_path}
                    />
                )
            }) : ''}
        </Box>
    );
};

export default Home;