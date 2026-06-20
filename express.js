const express=require('express')
const app =express()
//listen for request
app.get('/', (req, res)=>{
    //res.send('<p> Hello From Express, In Home Page! </p>')
    res.sendFile(__dirname+'/views/index1.html')
})

app.get('/about', (req, res)=>{
    //res.send('<p> Hello From Express in About !</p>')
    res.sendFile(__dirname+'/views/about.html')
})
//redirects
app.get('/about-us', (req, res)=>{
    res.redirect('/about')
})
//404  page
app.use((req, res)=>{
    res.status(404).sendFile('./views/404page.html',{root:__dirname})
})

app.listen(3000);