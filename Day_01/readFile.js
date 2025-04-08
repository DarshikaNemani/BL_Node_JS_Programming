const fs = require('fs');
const http = require('http');

http.createServer((req,res) => {
    fs.readFile('./file.txt', function(err,data){
        res.write(data,)
        return res.end()
    });
}).listen(3000)