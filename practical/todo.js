const express=require('express')
const app=express()
const PORT=3000

app.use(express.json())

//POST 
let tasks=[]
app.post('/todo', (req, res)=>{
    const {task, status}=req.body;
    if(!task || !status){
       return res.status(400).json({
            error:"Both Task and Status are Required!"
        })
       if(!["todo", "doing", "done"].includes(status)){
        res.status(400).json({
            error: "Status must todo, done or doing."
        })
       }
    }
    const newTask={
        id:tasks.length+1,
        task,
        status
    }
    tasks.push(newTask)
  return res.status(201).json(newTask)

})
//GET todo
app.get('/todo/:id', (req, res)=>{
    const id=Number(req.params.id)
    const task=tasks.find(t=>t.id===id)
    if(!task){
        return res.status(404).json({
            error:"No such Task"
        })
    }
    return res.status(200).json(task)

})
//GET by query
app.get('/todo',(req, res)=>{
    const {status}=req.query
    const filteredTasks=tasks.filter(t=>t.status===status)
    if(filteredTasks.length>=1 ){
     return res.status(200).json(filteredTasks)
    }
    return res.status(200).json(tasks)

})
app.listen(PORT)