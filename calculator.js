var express = require('express');
var bodyParser = require('body-parser');
const calculatorMod = require('./calculateModule');

const app = express();
const urlencodedParser = bodyParser.urlencoded({extended: true});

app.post('/calculate', urlencodedParser, function(req, res, next) {
    res.send(
        `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="css/style-calculator.css">
            <title>Simple Calculator - Nega Mogassa</title>
        </head>
        <body>
            <div class="container">
                <div class="center">
                    <div class="card border-calc">
                        <h1>Simple Calculator</h1>
                        <p>The Answer is: <strong>${calculatorMod.calculate(req.body.n1, req.body.n2, req.body.operation)}</p>
                        <a href="/">Another calculation</a>
                    </div>
                </div>      
            </div>
        </body>
        </html>`        
    );    
});

app.get('/', function(req, res, next) {
    res.send(
        `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="css/style-calculator.css">
            <title>Simple Calculator - Nega Mogassa</title>
        </head>
        <body>
            <div class="container">
                <div class="center">
                    <div class="card border-calc">
                        <h1>Simple Calculator</h1>
                        <form action="calculate" method="post">
                            <input type="text" name="n1"> <br>
                            <input type="text" name="n2"> <br>
                            Operation
                            <select name="operation">
                                <option value="add">Add</option>
                                <option value="subtruct">Subtract</option>
                                <option value="multiply">Multiply</option>
                                <option value="divid">Divid</option>
                            </select> <br>
                            <input type="submit" value="Calculate">
                        </form>
                    </div>
                </div>      
            </div>
        </body>
        </html>`        
    );    
});

app.use('/css', express.static('css'));

app.use((req, res, next) => res.status(404).send('404, Page could not be found :('+req.url));

app.listen(8080, () => console.log('Server is running on port 8080'));