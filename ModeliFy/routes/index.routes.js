const express = require("express");
const {gethome, searchProduct} = require("../controllers/index.controller");
const router = express.Router();

// vista del home
router.get('/', gethome);

module.exports = router;
// proceso de busqueda del navbar
// router.get('/search', searchProduct);

