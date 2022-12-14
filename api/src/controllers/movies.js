require('dotenv').config();

const axios = require('axios');
const { API_KEY } = process.env;
const { Movie } = require("../db.js");
const { Op } = require("sequelize");

async function getMovies(req, res) {
    try {
        let highlightedMovie = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`);
        let popularMoviesData = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`);
        let popularMovies = popularMoviesData.data.results.slice(0, 4);
        let response = {
            highlightedMovie: [highlightedMovie.data.results[0]],
            popularMovies: popularMovies
        };
        res.send(response);
    } catch (error) {
        res.send(error);
    }
};

async function getUserMovies(req, res) {
    try {
        let dataBaseMovies = await Movie.findAll();
        res.send(dataBaseMovies);
    } catch (error) {
        res.send(error);
    }
};

async function uploadMovie(req, res) {
    let { title, image } = req.body;
    const checkIfMovieIsAlreadyOnDb = await Movie.findOne({
        where: {
            title: { [Op.iLike]: `%${title}%` },
        }
    });
    if (!checkIfMovieIsAlreadyOnDb) {
        try {
            await Movie.create({
                title,
                image,
            })
            let dataBaseMovies = await Movie.findAll();
            res.status(201).send(dataBaseMovies);
        } catch (error) {
            res.send(error);
        }
    } else {
        res.status(422).send('Error de creacion. La pelicula ya existe');
    }
};

module.exports = {
    getMovies,
    getUserMovies,
    uploadMovie
};
