import axios from "axios";

export const GET_MOVIES = "GET_MOVIES";
export const GET_USER_MOVIES = "GET_USER_MOVIES";
export const MOVIES_SELECTED = "MOVIES_SELECTED";
export const UPLOAD_MOVIE = "UPLOAD_MOVIE";

let URL;
process.env.NODE_ENV === "development" ?
  URL = "http://localhost:3001"
  :
  URL = "";

export const getMovies = () => {
  return function (dispatch) {
    return axios.get(`${URL}/movies`)
      .then(resp => dispatch({ type: GET_MOVIES, payload: resp.data }))
      .catch(error => console.log('Action error in getMovies: ', error))
  }
};

export const getUserMovies = () => {
  return function (dispatch) {
    return axios.get(`${URL}/movies/usermovies`)
      .then(resp => {
        let userMovies = resp.data.slice(resp.data.length - 4, resp.data.length)
        dispatch({ type: GET_USER_MOVIES, payload: userMovies })
      })
      .catch(error => console.log('Action error in getUserMovies: ', error))
  }
};

export const moviesSelected = (selectedOption) => {
  return function (dispatch) {
    dispatch({ type: MOVIES_SELECTED, payload: selectedOption })
  }
};

export const uploadUserMovie = (movies) => {
  return function (dispatch) {
    let userMovies = movies.slice(movies.length - 4, movies.length).reverse()
    console.log(userMovies)
    dispatch({ type: UPLOAD_MOVIE, payload: userMovies })
  }
};
