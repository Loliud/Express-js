const shortid = require('shortid')
const db = require('../commons/db');

module.exports.renderProducts = (req, res) =>{
    const products = db.get('products').value();
    res.render('products/index.pug', {
        products: products
    });
}

module.exports.search = (req, res) =>{
    const products = db.get('products').value();
    const {search} = req.query;
    const searchProducts = products.filter(item  =>{
        return item.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });
    res.render('products/index.pug', {
        products: searchProducts
    });
}

module.exports.create = (req, res) =>{
    res.render('products/create.pug');
}

module.exports.viewProduct = (req, res) =>{
    
    const id = req.params.id;
    console.log(id);
    const product = db.get('products').find({id: id}).value();
    res.render('products/view/index.pug', {
        product:product
    });
}

module.exports.postCreate = (req, res) =>{
    const id = shortid.generate();
    const newProduct = req.body;
    req.body.id = id;
    console.log(newProduct);
    db.get('products').push(newProduct).write();
    res.redirect('/products');
}