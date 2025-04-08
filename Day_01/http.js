const http = require('http');
const server = http.createServer((req,res) => {
    res.end('Welcome to Node JS');
});
server.listen(5000,() => {
    console.log('Server running at port 5000')
});