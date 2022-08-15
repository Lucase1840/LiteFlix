import React from 'react';
import { useSelector } from 'react-redux';

import Card from '../Card/Card.jsx'
import Box from '@mui/material/Box';

function Home() {
    const moviesSelected = useSelector(state => state.moviesSelected)

    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            p: 0,
            alignContent: "flex-start",
            minHeight: "640px",
            maxHeight: { xs: "auto", lg: "640px" },
            mt: 2,
            mb: { xs: 6, lg: 0 }
        }}>
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