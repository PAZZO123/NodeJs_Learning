const express=require('express')
const fs=require('fs')

const app=express()
const PORT=3000

app.use(express.json())
//File where credentials are stored
const FILE='./ex/auth.json'
//POST Signup save username and password
app.post('/signup', (req, res)=>{
    console.log(req.body);

    const { username, password }=req.body;
    if(!username || !password){
     return res.status(400).send('username and password are required!')
    }
    const users=JSON.parse(fs.readFileSync(FILE, 'utf8'))
    const exists=users.find(user=>user.username===username)
    if(exists){
        return res.status(409).send("user Already Exists")
    }
    users.push({
        username, 
        password
    })
    fs.writeFileSync(FILE, JSON.stringify(users))
    res.status(201).send("User registered successfully!");
})

//POST LOGIN

app.post("/login", (req, res)=>{
     console.log(req.body);
    const {username, password}= req.body;

    if(!username || !password){
        return res.status(400).json("Username and password are required!")
    }
    const users =JSON.parse(fs.readFileSync(FILE, "utf8"))
    const user=users.find( u=>u.username === username && u.password=== password)
    if(user){
        res.status(200).send("You are logged in!")
    }
    else{
        res.status(401).send('Wrong credentials!')
    }
})
//Listen
app.listen(PORT, ()=>{
    console.log(`Server running on http//localhost:${PORT}`)
})
