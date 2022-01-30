var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var urlencodedParser = bodyParser.urlencoded({extended: true});

app.set('view engine', 'pug');

app.post('/submit', urlencodedParser, (req, res, next) => {
    let currentScore = parseInt(req.body.score);
    let currentQuizNumber = parseInt(req.body.quizNumber);
    let currentAnswer = parseInt(req.body.answer);
    if(answers[currentQuizNumber] == currentAnswer)
        currentScore++;
    if( currentQuizNumber < questions.length - 1)
        res.render('quiz', {score: currentScore, quizNumber: currentQuizNumber + 1, quiz: questions[currentQuizNumber + 1]})
    else
        res.render('result', {score: currentScore, numberOfQuestions: currentQuizNumber + 1})
});

app.get('/', (req, res, next) => {
    res.locals = {score: 0, quizNumber: 0, quiz: questions[0]};
    res.render('quiz');
});

app.use('/css', express.static('css'));

app.listen(8080, () => console.log('Server running on port 8080'));

var questions = [
    "3, 1, 4, 1, 5",
    "1, 1, 2, 3, 5",
    "1, 4, 9, 16, 25",
    "2, 3, 5, 7, 11",
    "1, 2, 4, 8, 16"
];
var answers = [9, 8, 36, 13,32];