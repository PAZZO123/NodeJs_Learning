const http=require('http')//help to create server
const fs =require('fs') //for handling reading and writting files


const server=http.createServer((req,res)=>{
    // Get Request
    if(req.method==='GET'){
        // fs.readFile('./docs/input.txt', "utf8", (err, data)=>{
        //     if(err){
        //         res.writeHead(500, {"Content-Type":"text/plain"});
        //         res.end("Error while Reading File");
        //         return;
        //     }
        //  res.writeHead(200,{"Content-Type":"text/plain"});
        //  res.end(data);
        // });
        const readStream= fs.createReadStream('./docs/input.txt')
  res.writeHead(200, {
    "Content-Type":"text/plain"
  })
  readStream.pipe(res)

        } 

        // Post Request
         else if(req.method==='POST'){
        //  let body=""
        //  //getting data chunk by chunk and adding them to the body
        //  req.on("data", chunk=>{
        //     body+=chunk
        //  })
        
        //  //End Evend when all data have been seen
        //  req.on("end", ()=>{
        //     fs.writeFile("./docs/output.txt", body, err=>{
        //         if(err){
        //             res.writeHead(500, {"Content-Type": " text/plain"})
        //             res.end("Error While Writting File")
        //         }
        //         res.writeHead(200, {"Content-Type": "text/plain"})
        //         res.end("Data Sent Succefully!")
        //     });
        //  })
         const writeStream = fs.createWriteStream('./docs/output.txt');

req.pipe(writeStream);

writeStream.on('finish', () => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Data Sent Successfully!");
});
    }

    else{
        res.writeHead(405, {"Content-Type" : "text/plain"})
        res.end("Oops Unsupported Method!")
    }
});
server.listen(3000)



// Stream Version
//GET


  //POST

