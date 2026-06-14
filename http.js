const http=require('node:http')

const server=http.createServer((req,res)=>{
const {method, url}=req;
if(method==='GET' && url==='/'){
    res.writeHead(200, {'Content-Type':'text/html'})
    res.end('<html> Welcome Home</html>')
}
else if(method==='GET' && url==='/about'){
    res.writeHead(200, {'Content-Type':'text/html'})
    res.end('<htm> Hi Welcome to The About Page</htm>')
}
else if(method==='GET' && url==='/contact'){
    res.writeHead(200, {'Content-Type':'text/html'})
    res.end('<htm> Hi Welcome to The Contact</htm>')
}
else{
    res.writeHead(404,{'Content-Type':'text/html'})
    res.end('<html> 404 Page Not Found </html>')
}

})

server.listen(3000)