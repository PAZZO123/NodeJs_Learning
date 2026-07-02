const express=require('express')
const app=express()

//middleware
function requestLoger(req, res, next){
    const start=Date.now()

    res.on('finish', ()=>{
        const duration=Date.now()-start

        console.log(`[${new Date().toISOString()}] ${req.method}${req.originalUrl}-${duration}ms`)
    });
    next();
}

app.use(requestLoger) //registering middleware

app.get('/', (req, res)=>{
    res.json({
        message:"Welcome to the Home  Route"
    })
});

app.get('/users', (req, res)=>{
     res.json({
        users:["Patrick", "Justine", "Straton "]
     })
})

app.listen(3000)