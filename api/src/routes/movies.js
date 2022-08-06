const { Router } = require("express");
const router = Router();
const { getMovies, getUserMovies, uploadMovie } = require('../controllers/movies.js');

router.get("/", getMovies)
router.get("/user", getUserMovies)
router.post("/upload", uploadMovie)

module.exports = router;

//--------------------------------------------------------------------------------------







