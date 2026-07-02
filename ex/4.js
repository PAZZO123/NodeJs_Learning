const express=require('express')
const app=express()
const PORT=3000

const rates={
    usd:1300,
    gbp:1750,
    eur:1500
}

app.get('/convert', (req, res)=>{
    const { amount, currency}= req.query;
    
    //check if parameter exists
    if (!amount | !currency){
        return res.status(400).json({
            error:"Both amount and currency querry parameters are required"
        });
    }

    const numAmount=Number(amount)
    if(isNaN(numAmount)){
        return res.status(400).json({
            error: "Amount must be a valid number"
        });
    }
    //Validate currency
    if(!rates[currency]){
        return res.status(400).json({
            error:"Currency must be one of: used, eur, bgp"
        })
    }

    //convert to RWF
    const convertedAmount=numAmount*rates[currency];
    res.status(200).json({
        input: {
            amount:numAmount,
            currency:currency
        },
        convertedAmount,
        unit: "RWF"
    })

})

//listen
app.listen(PORT)
