import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMovies } from '../../redux/actions';
import Card from '../Card/Card.jsx'
import Box from '@mui/material/Box';
function Home() {
    const dispatch = useDispatch();
    const moviesSelected = useSelector(state => state.moviesSelected)
    useEffect(() => {
        // dispatch(getMovies())
    }, [moviesSelected]);

    console.log(moviesSelected)

    console.log(moviesSelected)
    return (
        <Box sx={{ display: "flex", flexDirection: "column", p: 0, alignContent: "flex-start", minHeight: "640px", maxHeight: "640px", mt: 2 }}>
            {moviesSelected?.length ? moviesSelected.map((movie, i) => {
                return (
                    movie.id.length > 16 ?
                        (<Card
                            key={i}
                            title={movie.title}
                            votes={'no disponible'}
                            year={movie.createdAt}
                            image={movie.image}
                        />)
                        : (<Card
                            key={i}
                            title={movie.title}
                            votes={movie.vote_average}
                            year={movie.release_date}
                            image={movie.backdrop_path}
                        />)
                )
            }) : ''}
        </Box>
    );
};

export default Home;