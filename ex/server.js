const http= require('http')
const fs =require('fs')
const PORT=3001


const server= http.createServer((req, res)=>{
    if(req. method==='GET'){
        // const readStream=fs.createReadStream('./ex/input.txt')
        // res.writeHead(200, {
        //     "Content-Type":"text/plain"
        // })
        //readStream.pip(res)

        // readStream.on("error", ()=>{
        //     res.writeHead(500, {
        //         "Content-Type":"text/plain"
        //     })
        //     res.end("Error While Reading File")
        // })

        fs.readFile("./ex/input.txt","utf8",(err, data)=>{
            if(err){
                res.writeHead(500, {
                    "content-type":"text/plain"
                })
                return res.end("Error While Reading File")
            }
            res.writeHead(200, {
                "content-type":"text/plain"
            })
            res.end(data)
        })
    }

    else if(req.method ==='POST'){
    //     const writeStream=fs.createWriteStream('./ex/output.txt')
    //     req.pipe(writeStream)

    //   req.on('end', ()=>{
    //         res.writeHead(201, {
    //             "Content-Type":"text/plain"

    //         })
    //         res.end("Data Written Succefully")
    //     })
    //     req.on("error", ()=>{
    //         res.writeHead(500, {
    //             "Content-Type":"text/plain"
    //         })
    //         res.end("Error While Reading File")
    //     })
    let body=""
    req.on("data",chunk=>{
        body+=chunk
    } )
    req.on("end" ,()=>{
       fs.writeFile('./ex/output.txt', body,(err)=>{
        if(err){
                res.writeHead(500, {
                    "content-type":"text/plain"
                })
                return res.end("Error While Writind File")
            }
       res.writeHead(201,{
        "Content-Type":"text/plain"
       })
       res.end("File Created and Written Successfully")
     })
    })
   
    }
    else{
        res.writeHead(405, {
            "content-type":"text/plain"
        })
        res.end('Method Not allowed')
    }

})


server.listen(PORT)