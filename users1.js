const express=require('express')
const userRouter=require('./users')


const app=express()
app.use(express.json())
app.use('/api/users', userRouter)


app.use((err,req, res, next)=>{
    console.log(err);
    res.status(err.status || 500).json({
        error:err.message ||'Internal server Error'
    })
})

app.listen(3000)