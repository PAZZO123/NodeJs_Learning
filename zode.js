const express=require('express')
const app=express()
const {z, email}=require('zod');
const createUserSchema=z.object({
    body:z.object({
        name:z.string().min(2).max(50),
        email:z.string().email(),
        age:z.number().min(0).max(50).optional()
    })
});

function validate(schema){
    return (req, res, next)=>{
        const result=schema.SafeParse({
            body:req.body,
            params:req.params,
            query:req.query
        })
   if (!result.success) {
 return res.status(422).json({
 error: 'Validation failed',
 details: result.error.flatten(),
 });
 }
 // overwrite with parsed (and coerced) values
 req.body = result.data.body ?? req.body;
 req.params = result.data.params ?? req.params;
 req.query = result.data.query ?? req.query;
 next();
 };

}

app.post('/api/users', validate(createUserSchema), (req, res) => {
 // req.body is now guaranteed valid
 res.status(201).json(req.body)});
  app.listen(3000)