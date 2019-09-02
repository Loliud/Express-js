const app = require('express')();
var bodyParser = require('body-parser')
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
const port = 3000;
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('db.json')
const db = low(adapter)

// Set some defaults (required if your JSON file is empty)
db.defaults({products: [{name: 'Pepsi'}]})
  .write();



// mo cong home
app.get('/', (req, res) =>{
    res.render('home.pug');
});
// render ra danh sach san pham
app.get('/products', (req, res) =>{
    const products = db.get('products').value();
    res.render('products/index.pug', {
        products: products
    });
});

// tim kiem san pham trong danh sach
app.get('/products/search', (req, res) =>{
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
app.get('/product/create', (req, res) =>{
    res.render('products/create.pug');
});
// gui san pham len server
app.post('/product/create', (req, res) =>{
    const newProduct = req.body;
    console.log(newProduct);
    db.get('products').push(newProduct).write();
    res.redirect('/products');
});



app.listen(port, () =>{
    console.log('Hello');
})