const app = require('express')();
const port = 3000; // cong


app.get('/', (req, res) =>{
    res.send('<h1>Xin chao cac ban </h1>');
});



app.listen(port, () =>{
    console.log('Server listening on port: ' + port);
});