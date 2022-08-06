import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMovies } from '../../redux/actions';

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {

  }, []);

  return (
    <>
      <div>
        hola!
      </div>
    </>
  );
};

export default Home;