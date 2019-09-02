const app = require('express')();
const port = 3000;
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



app.listen(port, () => {
    console.log('Sever listenning on port ' + port);
})