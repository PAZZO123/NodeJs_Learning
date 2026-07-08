const express=require('express')
const app=express()
const fs=require('fs')

app.use(express.json())
   let FILE='./practical/auth.json'
app.post('/signup',(req, res)=>{
 
    const {username, password}=req.body
    if(!username || !password){
        return res.status(400).send("Username and Password are Required")
    }
    let users=JSON.parse(fs.readFileSync(FILE,'utf8'))
    const exists=users.find(user=>user.username===username)

    if(exists){
       return res.status(400).send('User with the username already exists')
    }
    users.push({
        username, 
        password
    })
    fs.writeFileSync(FILE, JSON.stringify(users))
    return res.status(201).send("user Created Successfullly")
    
    
})

app.post('/login',(req, res)=>{
    const {username, password}=req.body
        if(!username || !password){
        return res.status(400).send("Username and Password are Required")
    }
    const users=JSON.parse(fs.readFileSync(FILE, 'utf8'))
    const user=users.find(u=>u.username===username && u.password===password)
    if(!user){
        return res.status(400).send("Wrong Credentials!")
    }
    return res.status(200).send('You logged in!')
})

app.listen(3000)