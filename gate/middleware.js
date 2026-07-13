const express=require('express')
const app=express()
const PORT=3000


//Middleware
function requestLogger(req, res,next){
    const start= Date.now()
    res.on("finish", ()=>{
        const timeTaken=Date.now()-start
    console.log(`[${ new Date().toISOString()}] ${req.method} ${req.originalUrl}-${timeTaken}ms`)
    
    })
      next()
  
}
app.use(requestLogger)
//Use the Defined Middleware
app.get('/',(req, res)=>{
    res.send("Request Was Received")
})

app.get("/users", (req, res)=>{
    res.send(["Patrick", "Straton"])
})


app.listen(PORT)