const express =require('express')
const app=express()

app.use(express.json())
 let tasks=[]
 let nextId=1

 //POST Request

 app.post('/todo', (req, res)=>{
    const {task, status}=req.body
    const newTask={
        id:nextId++,
        task,
        status
    }
    tasks.push(newTask)
    res.status(201).json(newTask)
 })


 //GET Request & GET todo?status=done
 app.get('/todo',(req, res)=>{
    const {status}=req.query
    if(status){
    const filteredTask=tasks.filter((task)=>task.status===status);
    res.json(filteredTask)
    }
    res.json(tasks)
 })
 //GET todo/:id

 app.get('/todo/:id', (req, res)=>{
    const id= Number(req.params.id)
    const task=tasks.find((task)=> task.id===id)

    if(!task){
        return res.status(404).json({message:"Task Not found"})
    }
    return res.status(200).json(task)
 })

 //Listen to the requests
 app.listen(3000)