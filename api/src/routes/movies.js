const { Router } = require("express");
const router = Router();
const { getMovies } = require('../controllers/movies.js');

router.get("/", getMovies)
// router.get('/category/:category', getProdByCategory)
// router.post("/", createProduct)
// router.put("/update/:idProduct", updateProduct)
// router.delete('/delete/:idProduct', deleteProduct)

module.exports = router;

//--------------------------------------------------------------------------------------







