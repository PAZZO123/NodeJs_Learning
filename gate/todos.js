const express=require('express')
const app=express()
const PORT=3000
app.use(express.json())

const tasks=[]

//Post todos
app.post('/todo', (req, res)=>{
    const {task, status}=req.body;
    if(!status || !task){
        return res.status(400).json({
            error:"Both Status and Task are needed"
        })
    }
    
        if(!['todo', 'doing', 'done'].includes(status)){
           return  res.status(400).json({
                error:"Invalid Status"
            })
        }

        const newTask={
            id:tasks.length+1,
            task,
            status
        }
        tasks.push(newTask)
       return res.status(201).json(newTask)
})
//GET Todos
app.get('/todo', (req, res)=>{
    const {status}=req.query
    const filteredTasks=tasks.filter(task=>task.status===status)
    if(filteredTasks.length>0){
       return res.status(200).json(filteredTasks)
    }
    return res.status(200).json(tasks)
    
})

//GET by id
app.get('/todo/:id', (req, res)=>{
    const id=Number(req.params.id)
    const exists=tasks.find(task=>task.id===id)
    if(!exists){
       return res.status(404).json({
            error:"Task Not Found!"
        })
    }
    res.status(200).json(exists)
})

app.listen(PORT)