const express=require('express')
const app =express()

app.get('/users/:id', (req, res)=>{
    const id=Number(req.params.id)
    if(!Number.isInteger(id) || id<1){
        return res.status(404).json({error:'Invalid User Id'})
    }
    res.json({id, name:'User'+id})
});
app.listen(3000);