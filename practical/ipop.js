const http=require('http')
const PORT=3000
const fs=require('fs')

 
const server=http.createServer((req, res)=>{
    if(req.method==='GET'){
       const readStream=fs.createReadStream('./practical/input.txt')
       readStream.on('error',()=>{
        res.writeHead(400, {"Content-Type":"text/plain"})
        return res.end("Error While Reading the File")
       })
       readStream.pipe(res)
    }
        else if(req.method==='POST'){
          const writeStream=fs.createWriteStream('./practical/output.txt')
           req.on('error',()=>{
        res.writeHead(400, {"Content-Type":"text/plain"})
        return res.end("Error While Writing the File")
       })
      req.pipe(writeStream)
      req.on('end',()=>{

           res.end("File Created Successfully")
      })
   
    }
    else{
          res.writeHead(405, {"Content-Type":"text/plain"})
                return res.end("Method Not Supported!")
    }
})

 server.listen(PORT)
