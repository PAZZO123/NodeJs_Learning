const express=require('express')
const app=express()
const PORT=3000

app.use(express.json())
//object
const rates={
    usd:1450,
    eur:1300,
    gbp:1750
}

app.get('/convert', (req, res)=>{
    const {amount, currency}=req.query
    const numAmount=Number(amount)
    console.log(numAmount, currency)
    if(!amount || !currency){
       return res.status(400).json({
            error:"Both Amount and Currency are needed!"
        })
    }
    if(isNaN(numAmount)){
        return res.status(400).json({
            error:"Amount must be the numeric Value"
        })
    }
    if(!['eur','bgp','usd'].includes(currency)){
        res.status(400).json({
            error:"The support currency are only eur , bgp, usd enter supported currency."
        })
    }

    const convertedAmount=numAmount*rates[currency]
    const response={
        input:{amount:numAmount, currency},
        convertedAmount,
        unit:"RWF"
    }
    return res.status(200).json(response)

})



app.listen(PORT)