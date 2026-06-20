const express=require('express')
const morgan =require('morgan')
const mongoose=require('mongoose')
const blogRoutes=require('./routes/blogRoutes')
const app=express()
app.set('view engine', 'ejs')

//database connection
const dbURL = 'mongodb+srv://patrick:ijpazzo@cluster0.d4ltffq.mongodb.net/node-tuts?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(dbURL)
.then((res)=>app.listen(3000))
.catch((err)=>console(err))



//Middleware


app.use(express.static('public'))
app.use(express.urlencoded({urlencoded: true }))

app.use(morgan('dev'))

//mongoose and mongo sandbox
// app.get('/add-blog',(req, res)=>{
//     const blog =new Blog({
//         title:'new Blog',
//         snippet:'about my new blog',
//         body:'more about my new blog'
//     });
//     blog.save()
//     .then((result)=> res.send(result))
//     .catch((err)=>console.log(err))
// } )
// //getting all blogs
// app.get('/all-blogs', (req, res)=>{
//     Blog.find()
//     .then((result)=>res.send(result))
//     .catch((err)=>console.log(err))
// })
// //getting single blog
// app.get('/single-blog', (req, res)=>{
//     Blog.findById('6a035b45eeb4f68614cc53f1')
//     .then((result)=>res.send(result))
//     .catch((err)=>console.log(err))
// })

app.use( blogRoutes)

//404  page
app.use((req, res)=>{
    res.render('404page',{title:'Page Not Found'})
})

