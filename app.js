const express =require('express')
const path=require('path')
const morgan=require('morgan')
const mongoose=require('mongoose')



//express app
const app =express()

const dbURL = 'mongodb+srv://patrick:test123@cluster0.d4ltffq.mongodb.net/?appName=Cluster0'
mongoose.connect(dbURL)
.then(() => {
    console.log('Connected successfully')
    app.listen(3000)
})
.catch(err => console.log(err))
//register view engine
app.set('view engine','ejs')
//listen requests
app.listen(3000);

//MIDDLE WARE that will run between request and response
app.use(morgan('tiny'))
app.use(express.static('public'))
// app.use((req, res,next)=>{
//     console.log('new request made.')
//     console.log('host:', req.hostname)
//     console.log('path:', req.path)
//     console.log('method:', req.method)
//     next()

// })

app.get('/', (req,res)=>{
    //infer the content and set the content headers automtically and status code
    //res.send('<p> Hello from Express</p>')
    const blogs=[
        {title:'Patty finds eggs', snippet:'do not move anywhere'},
        {title:'Gad founded some', snippet:"do not try to falsfy them."},
        {title:'As cold as it is', snippet:"I know what you are thinnking"}
    ]
    
    res.render('index',{title:'Home',blogs:blogs})
    //sendFile(path.join(__dirname,'lesson3','index.html'))
})
app.get('/about', (req,res)=>{
    //res.send('<p> Hello from Express This is about page!</p>')
    //res.sendFile("./lesson3/about.html",{root:__dirname})
    res.render('about',{title:'Abaut'})
    //sendFile(path.join(__dirname,'lesson3','about.html'))
})
app.get('/blogs/create', (req,res)=>{
    res.render('create',{title:'Create'})
})
//.use to create middleware and this is the 404 page
app.use((req, res)=>{
    res.status(404).render('404page',{title:'404'})
})