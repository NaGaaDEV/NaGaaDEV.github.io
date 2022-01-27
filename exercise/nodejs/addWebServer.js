var http = require('http');
var url = require('url');
var fs = require('fs');
var add = require('./addMod.js');

http.createServer(function(req,res) {
    const urlparam = url.parse(req.url, true);
    const filename = '.' + urlparam.pathname;
    if(filename == './add.js')
        add.add(req,res,urlparam.query);
    else {
        fs.readFile(filename, function(err, data) {
            if(err) {
                res.writeHead(400, {'Content-Type':'text/html'});
                return res.end('404 Not Found.');
            }
            res.writeHead(200);
            res.write(data);
            return res.end();
        })
    }
}).listen(8080);