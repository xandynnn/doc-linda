import http from 'http';
import fs from 'fs';

var host = 'localhost';
var port = 80;

fs.readFile('./docLinda/index.html', function (err, html) {
    if (err) {
        throw err; 
    }       
    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();
    }).listen(port, host, function () {
        console.log(`DocLinda rodando em http://${host}:${port}`);
    });
});