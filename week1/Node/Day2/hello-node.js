const http = require('http')


const server = http.createServer((req, res)=>{
    console.log(req);
    res.end('Hello World')
    
});

server.listen(3000, ()=>{
    console.log('Server running at http://localhoost:3000')
});