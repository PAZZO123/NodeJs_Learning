const express=require('express')
const app=express()
const PORT=3000

//Middleware
 function requestLogger(req, res, next){
    const start =Date.now()

    res.on('finish', ()=>{
        const endTime=Date.now()-start

        console.log(`[${new Date().toISOString()}] ${req.method}${req.originalUrl}-${endTime}ms `)
    })
    next()
 }

 app.use(requestLogger)
 // TEST Via Endpoint
 app.get('/', (req, res)=>{
    res.status(200).send('Something is done i mean request is sent!')
 })
 //test for users
 app.get('/users', (req, res)=>{
    res.status(200).json(
        ["Patrick", "Straton"]
    )
 })
  
app.listen(PORT)