const express=require('express')
const app=express()
const PORT=3000;
// Request Lorger Middleware

function requestLogger(req, res, next){
    //Record the start time
    const start= Date.now()

    //When response finishes
    res.on('finish', ()=>{
        const end= Date.now()
        const responseTime=end-start

        console.log(`
            [${new Date().toISOString()}] ${req.method} ${req.originalUrl} - ${responseTime}ms`)
    });
    next();
}
//Registe middleware globally
app.use(requestLogger)

//Home Route
app.get("/" , (req, res)=>{
    res.status(200).json({
        message:"Welcome to the Home Page"
    })
});

//Users Route
app.get("/users", (req, res)=>{
    res.status(200).json({
        users:["Patrick", "Erick", "Diane"]
    })
});

app.listen(PORT)
