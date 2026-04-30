const http=require('http')
const fs=require('fs')
const _=require('lodash')
const server=http.createServer((req, res )=>{
    //lodash
    const num=_.random(0,20)
    const greet=_.once(()=>{
        console.log('Hello Patrick .')
    })
    console.log(num)
     greet()
     greet()
    res.setHeader('Content-Type','text/html');
    //Routing mechanism
    let path='./lesson3/'
    switch(req.url){
        case '/':
            path +='index.html'
            // Setting status Codes
            res.statusCode=200
            break;
        case '/about':
            path +='about.html'
            res.statusCode=200
            break;
        case '/about-us':
            res.statusCode=301
            //Redirects in nodejs
              res.setHeader('Location', '/about')
              res.end()
            break;
        default:
            path +='404page.html' 
            res.statusCode=404

            break;
    }
    fs.readFile(path,(err,data)=>{
        if(err){
            console.log(err)
            res.end()
        }else{
           // res.write(data)
            res.end(data)
        }
    })
});

server.listen(3000, 'localhost',()=>{
    console.log('listening to the requests from the port 5173...')
})