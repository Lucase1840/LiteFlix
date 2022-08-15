import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMovies, getUserMovies, moviesSelected } from '../../redux/actions';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Cards from '../Cards/Cards.jsx'
import MainTitleAndButtons from '../MainTitleAndButtons/MainTitleAndButtons.jsx'
import NavBar from '../NavBar/NavBar.jsx'
import Filter from '../Filter/Filter.jsx'
import AddMovieModal from '../AddMovieModal/AddMovieModal.jsx'
import useMediaQuery from '@mui/material/useMediaQuery';

function Home() {
  const dispatch = useDispatch();
  const highlightedMovie = useSelector(state => state.highlightedMovie[0])
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    dispatch(getMovies())
    dispatch(getUserMovies())
  }, [dispatch]);

  console.log(highlightedMovie)
  let image;
  const screenWidth = useMediaQuery('(max-width:375px)');

  screenWidth ? image = `url(https://image.tmdb.org/t/p/original${highlightedMovie?.poster_path})` : image = `url(https://image.tmdb.org/t/p/original${highlightedMovie?.backdrop_path})`
  return (
    <Box sx={{
      maxWidth: "100vw",
      mx: "-8px",
      my: "-8px",
      height: "100vh",
      backgroundSize: "cover",
    }}>
      <AddMovieModal open={open} setOpen={setOpen} handleOpen={handleOpen} handleClose={handleClose} />
      <Box sx={{
        height: { xs: "100vh" },
        width: { xs: "100vw", lg: "100vw" },
        minHeight: "100vh",
        backgroundPosition: "center",
        backgroundImage: image,
        backgroundRepeat: "no-repeat",
        backgroundSize: { xs: "cover", lg: "cover" },
      }}>
        <Box sx={{
          maxHeight: { xs: "100vh", lg: "665px" },
          maxWidth: "100vw",
          minHeight: "100%",
          pr: { xs: "0px !important", lg: "16px !important" },
          pl: { xs: "0px !important", lg: "16px !important" }
        }}>
          <Box sx={{ mb: { xs: 2, lg: 2 } }}>
            < NavBar handleOpen={handleOpen} />
          </Box>
          {!screenWidth ? <Filter /> : ''}
          <Box sx={{
            display: "flex",
            flexDirection: { xs: 'column', lg: 'row' },
            justifyContent: { xs: 'center', lg: "space-between" },
            alignItems: { xs: 'center', lg: "flex-end" },
            mt: { xs: 8, lg: 0 },
            px: { xs: 2, lg: 10 },
            background: { xs: 'linear-gradient(0deg, rgba(36,36,36,1) 65%, rgba(255,255,255,0) 80%)', lg: 'transparent' },
            // height: "auto"
          }}>
            <MainTitleAndButtons movieTitle={highlightedMovie?.title} />
            {screenWidth ? <Filter /> : ''}
            <Cards />
          </Box>
        </Box>
      </Box >
    </Box >

  );
};

export default Home;