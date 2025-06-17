

const http = require('http')
const routes = require('./routes')

const server = http.createServer((req, res)=>{
    res.end('Server Running ....')
    
    res.writeHead(200, {'Content-Type': 'text/html'})

    const url = req.url
     

    if(url === '/'){
        res.write('Welcome to Home Page')
    }
    else if(url === '/about'){
        res.write('Welcome to About us page')
        res.end();
    }
    else if(url === '/contact-us'){
        res.write('Welcome to contact us')
        res.end();
    }
    else{
        res.write('Hello World')
    }
})

server.listen(3000, ()=>{
    console.log('server running on port 3000')
})


