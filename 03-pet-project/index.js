const app = require('express')();
const products = require('./routers/products.router');
var bodyParser = require('body-parser')

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
const port = 3000;

// mo cong home
app.get('/', (req, res) =>{
    res.render('home.pug');
});
// lien ket vs router products
app.use('/products', products);




app.listen(port, () =>{
    console.log('Hello');
})