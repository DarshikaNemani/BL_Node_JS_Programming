var http = require('http');
var sum1 = require('./calculateModule');

http.createServer((req,res) => {
    res.write(`${sum1.sum(4, 5)}`);
    res.end();
}).listen(3000);