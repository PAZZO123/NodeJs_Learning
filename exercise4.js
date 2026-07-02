const express=require('express')
const fs= require('fs')
const path= require('path')

const app = express()
app.use(express.json())

const data_file=('./data.json')
// Function to read data

function readData(){
    if(!fs.existsSync(data_file)){
        fs.writeFileSync(data_file, "[]")
    }
    const data = fs.readFileSync(data_file, "utf8")
    return JSON.parse(data)
}

// Function to write data
function writeData(data){
    fs.writeFileSync(data_file, JSON.stringify(data, null, 2))
}
// Get all items
app.get('/items', (req, res)=>{
    const items=readData();
    res.status(200).json(items)
})

//POST Create item
app.post('/items', (req, res)=>{
    const items=readData()
    const newItem={
        id: Date.now(),
        ...req.body
    }
    items.push(newItem)
    writeData(items)
    res.status(201).json(newItem)
})
//Put update item

app.put('/items/:id',(req, res)=>{
    const items=readData()
    const id=Number(req.params.id)
    const index=items.findIndex(item=>item.id===id)
    if(index===-1){
        return res.status(404).json({
            message:"Something Went Wrong Item not found"
        })
    }
    items[index]={
        ...items[index],
        ...req.body
    }
   writeData(items)
  res.json(items[index])
  })

  //DELETE Item

  app.delete('/items/:id',(req, res)=>{
    const items=readData()
    const id= Number(req.params.id)
    const  filtered= items.filter(item=>item.id!==id)

    if(filtered.length=== items.length){
        return res.status(404).json({
            message: 'Resource Not Found.'
        })
    }
    writeData(filtered)
    res.json(200).json({
        message:" Item Deleted Successfully."
    })
  })

  app.listen(3000,()=>{
    console.log("Server running on port 3000");
});