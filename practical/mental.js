const express=require('express')
const fs=require('fs')
const app=express()

const FILE='./practical/data.json'

if(!fs.existsSync(FILE)){
    fs.writeFileSync(FILE, '[]')
}

function readData(){
   const data=fs.readFileSync(FILE, 'utf8')
   return JSON.parse(data)
}

function writeData(data){
    fs.writeFileSync(FILE, JSON.stringify(data, null, 2))
}
 app.use(express.json())

app.get('/items', (req, res)=>{
    const data=readData()
    return res.status(200).json(data)
})

app.post('/items',(req, res)=>{
    const  items=readData()
    const newItem={
        id:items.length+1,
        ...req.body
    }
    items.push(newItem)
    writeData(items)
    res.status(200).json(newItem)
})

app.get('/items/:id', (req, res)=>{
    const id=Number(req.params.id)
    const items=readData()
    const item=items.find(i=>i.id===id)
    if(!item){
     return  res.status(404).json({
            error:"item not found"
        })

    }
      return res.status(200).json(item)
})
//delete
app.delete('/items/:id',(req, res)=>{
    const id=Number(req.params.id)
    const items=readData()
    const exists=items.find(i=>i.id===id)
    if(!exists){
      return  res.status(404).json({
            error:"Item not found!"
        })
    }
    const filteredItems=items.filter(item=>item.id!==id)
    writeData(filteredItems)
    res.status(204).json({
        message:"Item was Deleted Successfully!"
    })
})
app.put('/items/:id', (req, res)=>{
    const  id =Number(req.params.id)
    const items=readData()
      const index=items.findIndex(i=>i.id===id)
    if(index===-1){
      return  res.status(404).json({
            error:"Item not found!"
        })
    }
    const updatedItems=items.map(i=>i.id===id?{id, ...i, ...req.body}:i)
    writeData(updatedItems)
    res.json(updatedItems[index])
})
app.listen(3000)