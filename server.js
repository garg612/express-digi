const http=require('http');
const fs=require('fs');
const hostname='127.0.0.1'
const port =8000;

const server=http.createServer((req,res)=>{
    if (req.url==='/') {
        res.statusCode=200;
        res.setHeader('Content-Type','text/html');
        res.end('i want pussy')
    }else if(req.url==='/about'){
        res.statusCode=200;
        res.setHeader('Content-Type','text/html');
        res.end('i want sex')
    }else{
        res.statusCode=404;
        res.setHeader('Content-Type','text/html');
        res.end('file not found')
        
    }

})
server.listen(port,hostname,()=>{
    console.log(`server is running at http://${hostname}:${port}/`)
    
})