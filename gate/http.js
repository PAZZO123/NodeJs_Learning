const http=require('http')
const fs=require('fs')
const PORT=3000


const server=http.createServer((req, res)=>{
    if(req.method==='GET'){
        fs.readFile('./input.txt', "utf8", (err, data)=>{
            if(err){
                res.writeHead(400, {"Content-Type":"text/plain"})
                return res.end("Something Went Wrong Wile reading file")
            }
            res.writeHead(200, {"Content-Type":"text/plain"})
            return res.end(data)
        })
    }
    else if(req.method==='POST'){
        let body=""
        req.on("data", (chunk)=>{
            body+=chunk
        })
        req.on("end",()=>{
              
            fs.writeFile('./output.txt',body,(err)=>{
                if(err){
                    res.writeHead(400, {"Content-Type":"text/plain"})
                    return res.end("Error While writing the file.")
                }
                res.writeHead(201, {"Content-Type":"text/plain"})
                res.end("File Created Succesfully!")
            })
       

        })
     
    }
    else{
        res.writeHead(405, {"Content-Type":"text/plain"})
        res.end("The Method used is not supported")
    }
})



server.listen(PORT,()=>{
    console.log(`Listening to http://localhost:${PORT}`)
})