const express=require('express')
const app=express()
const PORT=3000;

app.use(express.json())

//Store taks in memory
let tasks=[]

//POST /todo
//create new task
app.post("/todo", (req, res)=>{
    const {task , status}=req.body;
    //Validate
    if(!task || !status){
        return res.status(400).json({
            error:"Task and status are required"
        })
    }
    if(!['todo', 'done', 'doing'].includes(status)){
        res.status(400).json({
            error:"Status must include todo, done, or doing "
        })
    }
    const newTask={
        id:tasks.length+1,
        task,
        status
    }
    tasks.push(newTask)
    res.status(201).json(newTask);
})
//GET /todo
app.get("/todo", (req, res)=>{
    const {status}=req.query
    if(status){
        const filteredTask=tasks.filter(task=>task.status===status)
        return res.status(200).json(filteredTask)
    }
    res.json(tasks)
})
//GET /todo/:id
app.get("/todo/:id", (req, res)=>{
    const id =Number(req.params.id);
    const task=tasks.find(t=>t.id===id)
    if(!task){
        return res.status(400).json({
            error:"Task not found."
        })
    }
    res.status(200).json(task)
})
//Listen to the task
app.listen(PORT, ()=>{
    console.log(`Server running on http://localhost: ${PORT}`);
})