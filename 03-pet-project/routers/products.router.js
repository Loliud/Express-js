const express = require('express');
const router = express.Router();

const productsControllers = require('../controller/products.controller');

router.get('/', productsControllers.renderProducts);

// tim kiem san pham trong danh sach
router.get('/search', productsControllers.search)
// mo endpoint create san pham
router.get('/create', productsControllers.create);

router.get('/view/:id', productsControllers.viewProduct);
// gui san pham len server
router.post('/create', productsControllers.postCreate);


module.exports  = router;