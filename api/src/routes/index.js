const { Router } = require('express');
const router = Router();
const Movies = require('./movies.js');

router.use('/movies', Movies);


module.exports = router;
