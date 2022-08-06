const axios = require('axios');
const { API_KEY } = process.env;
const { Movies } = require("../db.js");
// const { Op } = require("sequelize");

async function getMovies(req, res) {
    console.log("Hola, vengo a traer movies")
    try {
        let highlightedMovie = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=6f26fd536dd6192ec8a57e94141f8b20`);
        let popularMoviesData = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=6f26fd536dd6192ec8a57e94141f8b20`);
        let popularMovies = popularMoviesData.data.results.slice(0, 4)
        let response = {
            highlightedMovie: highlightedMovie.data.results,
            popularMovies: popularMovies
        }
        res.send(response);
    } catch (error) {
        res.send(error)
    }
};

async function getUserMovies(req, res) {
    try {
        let dataBaseMovies = await Movies.findAll();
        // res.send(dataBaseMovies);
    } catch (error) {
        res.send(error)
    }
};

module.exports = {
    getMovies,
    getUserMovies
};
