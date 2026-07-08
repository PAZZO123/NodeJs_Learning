const express=require('express')
const app=express()
const PORT=3000

const rates={
    usd:1300,
    eur:1500,
    gbp:170
}

app.get('/convert',(req, res)=>{
    const {amount, currency}=req.query
    const numAmount=Number(amount)
    if(!amount || !currency){
        res.status(400).send("Both Amoundt and Currency are required")
    }
    if(isNaN(numAmount) || numAmount<1){
       return res.status(400).send("Amount Shoulb number greater than zero")
    }
    if(!["usd", "eur", "gbp"].includes(currency)){
       return res.status(400).send("Unsupported Currency! We only support usd, eur and gbp!")
    }
    const convertedAmount=numAmount*rates[currency];
    return res.status(200).json({
        input:{amount, currency},
        convertedAmount,
        unit:"RWF"
    })
})
app.listen(PORT)