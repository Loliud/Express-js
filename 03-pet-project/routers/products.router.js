const express = require('express');
const router = express.Router();
const shortid = require('shortid')
const db = require('../commons/db');


router.get('/', (req, res) =>{
    const products = db.get('products').value();
    res.render('products/index.pug', {
        products: products
    });
});

// tim kiem san pham trong danh sach
router.get('/search', (req, res) =>{
    const products = db.get('products').value();
    const {search} = req.query;
    const searchProducts = products.filter(item  =>{
        return item.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });
    res.render('products/index.pug', {
        products: searchProducts
    });
})
// mo endpoint create san pham
router.get('/create', (req, res) =>{
    res.render('products/create.pug');
});

router.get('/view/:id', (req, res) =>{
    
    const id = req.params.id;
    console.log(id);
    const product = db.get('products').find({id: id}).value();
    res.render('products/view/index.pug', {
        product:product
    });
});
// gui san pham len server
router.post('/create', (req, res) =>{
    const id = shortid.generate();
    const newProduct = req.body;
    req.body.id = id;
    console.log(newProduct);
    db.get('products').push(newProduct).write();
    res.redirect('/products');
});


module.exports  = router;