const { Router } = require("express");
const router = Router();
const { getMovies, getUserMovies } = require('../controllers/movies.js');

router.get("/", getMovies)
router.get("/user", getUserMovies)
// router.get('/category/:category', getProdByCategory)
// router.post("/", createProduct)
// router.put("/update/:idProduct", updateProduct)
// router.delete('/delete/:idProduct', deleteProduct)

module.exports = router;

//--------------------------------------------------------------------------------------







