var http = require('http');
var myDate = require('./myModule');
http.createServer(function(req, res) {
    res.writeHead(200, {'Contenet-Type': 'text/html'});
    res.write("The date and time is "+myDate.myDate());
    res.end();
}).listen(8080);