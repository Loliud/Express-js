const app = require('express')();
const port = 3000;
const bodyParser = require('body-parser')
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.set('views', './views');
app.set('view engine', 'pug');

const users = [
    {name: 'Ky Anh'},
    {name: 'Ngoc Minh'},
    {name: 'Minh Tan'},
    {name: 'Hoang Son'}
]


app.get('/', (req, res) =>{
    res.render('index.pug');
});

app.get('/users', (req, res) =>{
    res.render('users/index.pug', {
        users: users
    });
});
app.get('/users/search', (req, res) =>{
    const {q} = req.query;
    const searchUsers = users.filter(user =>{
        return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    });
    res.render('users/index.pug', {
        users: searchUsers,
        q: q
    });
})
app.get('/users/create', (req, res) =>{
    res.render('users/create.pug');
});
app.post('/users/create', (req, res) =>{
    const newUser = req.body;
    users.push(newUser);
    res.redirect('/users');
});



app.listen(port, () => {
    console.log('Sever listenning on port ' + port);
})