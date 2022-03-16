var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
    
    if (req.url === "/") {
        fs.readFile("src/main.html", function (err, data) {
            if (err) {
                res.writeHead(404);
                res.write('Contents you are looking are Not Found');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(data);
            }
             
            res.end();
        });
        // 
    } else if(req.url === "/about"){
        fs.readFile("src/about.html", function (err, data) {
            if (err) {
                res.writeHead(404);
                res.write('Contents you are looking are Not Found');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(data);
            }           
            res.end();
        });
    }
    else if(req.url === "/terms"){
        fs.readFile("src/terms.html", function (err, data) {
            if (err) {
                res.writeHead(404);
                res.write('Contents you are looking are Not Found');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(data);
            }           
            res.end();
         });
    }
    else if(req.url === "/home"){
        fs.readFile("src/home.html", function (err, data) {
                if (err) {
                    res.writeHead(404);
                    res.write('Contents you are looking are Not Found');
                } else {
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.write(data);
                }            
                    res.end();
            });
    }
    else {
        fs.readFile("src/404.html", function (err, page) {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(page);        
                res.end();
        });
    }
});
const port = 5050;
const host = 'localhost'
server.listen(port,host)
console.log(`Server is running at localhost:${port}`)