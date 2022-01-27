exports.add = function(req,res,val) {
    res.writeHead(200, {'Content-Type':'text/html'})
    res.write(
        `<!DOCTYPE html>
        <html>
        <head><meta charset=\"utf-8\"/>
        <title>Calculator Web Site</title>
        </head>
        <body>
            <p>The sum is: ${String(parseInt(val.first) + parseInt(val.second))}</p>
        </body>
        </html>`
    );
    return res.end();
}