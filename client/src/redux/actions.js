import axios from "axios";

export const GET_MOVIES = "GET_MOVIES";
let URL;
process.env.NODE_ENV === "development" ? URL = "http://localhost:3001" : URL = "";

export const getMovies = () => {
  return function (dispatch) {
    return axios.get(`${URL}`)
      .then(resp => dispatch({ type: GET_PRODUCTS, payload: resp.data }))
      .catch(error => console.log('Action error in getProducts: ', error))
  }
};