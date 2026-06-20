const express=require('express')
const morgan =require('morgan')
const app=express()
app.set('view engine', 'ejs')
///app.set('views', 'myviews') Just in case you do not want to use views
//listen for request

//Middleware
// app.use((req, res, next)=>{
//     console.log('new request has made')
//     console.log('host:', req.hostname)
//     console.log('path:', req.path)
//     console.log('method:', req.method)
//     next()
// });
// app.use((req, res, next)=>{
//     console.log('In the next middleware ')
   
//     next()
// });

app.use(express.static('public'))

app.use(morgan('dev'))
app.get('/', (req, res)=>{
    const blogs = [
    {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
  ];
    res.render('index',{title:'Home',blogs})
})

app.get('/about', (req, res)=>{
    //res.send('<p> Hello From Express in About !</p>')
    res.render('about',{title:'About Page'})
})
//redirects
app.get('/blogs/create', (req, res)=>{
    res.render('create',{title:'Create Blog Page '})
})
//404  page
app.use((req, res)=>{
    res.render('404page',{title:'Page Not Found'})
})

app.listen(3000);