import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMovies } from '../../redux/actions';
import Cards from '../Cards/Cards.jsx'
function Home() {
  const dispatch = useDispatch();

  useEffect(() => {

  }, []);

  return (
    <>
      <Cards />
    </>
  );
};

export default Home;