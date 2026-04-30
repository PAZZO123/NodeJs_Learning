const http=require('http')
const fs=require('fs')
const server=http.createServer((req, res )=>{
    console.log(req)
    res.setHeader('Content-Type','text/html');
    fs.readFile('./lesson3/index.html',(err,data)=>{
        if(err){
            console.log(err)
            res.end()
        }else{
            res.write(data)
            res.end()
        }
    })
});

server.listen(3000, 'localhost',()=>{
    console.log('listening to the requests from the port 5173...')
})