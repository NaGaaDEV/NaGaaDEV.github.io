var express = require('express');
var database = require('./dictionary-database');

var app = express();

app.set('view engine', 'pug');

app.get('/dictionary', (req, res, next) => {
    const db = database.database();
    db.connect(function(err) {
        if(err) throw err;
        db.query("SELECT * FROM entries WHERE word = '"+req.query.word+"';", function(err, result, fileds) {
            if(err) throw err;
            res.send(result);
        })
    })
    
})

app.get('/', (req, res, next) => {
    res.render('dictionary');
});

app.use('/css', express.static('css'));
app.use('/js', express.static('js'));
app.use('/img', express.static('img'));

app.listen(8080, () => console.log('Server running on port 8080'));