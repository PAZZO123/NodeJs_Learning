const http=require('http')
const fs =require('fs')

const server=http.createServer((req, res)=>{
    if(req.method==='GET'){
        fs.readFile('./docs/input.txt', 'utf8', (err, data)=>{
            if(err){
                res.writeHead(500 , {"Content-Type":"text/plain"})
                res.end("Error While Reading")
                return;
            }
            res.writeHead(200,{"Content-Type":"text/plain"})
            res.end(data)
        })

    }

    else if(req.method=='POST'){
        let body="";
        req.on("data", (chunk)=>{})
    }
    
})