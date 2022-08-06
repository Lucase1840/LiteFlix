const axios = require('axios');
const { API_KEY } = process.env;
// const { Op } = require("sequelize");
const { Movies } = require("../db.js");

async function getMovies(req, res) {
    console.log("Hola, vengo a traer movies")
    try {
        let mainMovie = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=6f26fd536dd6192ec8a57e94141f8b20`);
        let popularMoviesData = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=6f26fd536dd6192ec8a57e94141f8b20`);
        let popularMovies = popularMoviesData.data.results.slice(0, 4)
        // res.send(mainMovie.data.results[0]);
        res.send(popularMovies);
    } catch (error) {
        res.send(error)
    }
};
module.exports = {
    getMovies,
};
