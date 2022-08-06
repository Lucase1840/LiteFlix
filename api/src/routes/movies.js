const { Router } = require("express");
const router = Router();
const { getMovies, getUserMovies, uploadMovie } = require('../controllers/movies.js');

router.get("/", getMovies)
router.get("/usermovies", getUserMovies)
router.post("/upload", uploadMovie)

module.exports = router;

//--------------------------------------------------------------------------------------







