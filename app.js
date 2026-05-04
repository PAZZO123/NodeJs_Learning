const express =require('express')
const path=require('path')

//express app
const app =express()
//listen requests
app.listen(3000);

app.get('/', (req,res)=>{
    //infer the content and set the content headers automtically and status code
    //res.send('<p> Hello from Express</p>')
    res.sendFile(path.join(__dirname,'lesson3','index.html'))
})
app.get('/about', (req,res)=>{
    //res.send('<p> Hello from Express This is about page!</p>')
    res.sendFile(path.join(__dirname,'lesson3','about.html'))
})