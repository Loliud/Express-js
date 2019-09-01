const app = require('express')();
const port = 3000;
app.set('views', './views');
app.set('view engine', 'pug');


app.get('/', (req, res) =>{
    res.render('index.pug');
});

app.get('/users', (req, res) =>{
    res.render('users/index.pug', {
        users: [
            {name: 'Ky Anh'},
            {name: 'Ngoc Minh'},
            {name: 'Minh Tan'},
            {name: 'Hoang Son'}
        ]
    });
});



app.listen(port, () => {
    console.log('Sever listenning on port ' + port);
})