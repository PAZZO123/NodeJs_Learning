const fs=require('fs')
//readfile
fs.readFile('./docs/blogs.txt', (error,data)=>{
 error?console.log(error):console.log(data.toString())
})
//writting file
fs.writeFile("./docs/blogs1.txt","Let us do it again and again .",()=>{
    console.log('it is written as it was supposed to be.')
})

//dierectories
if(!fs.existsSync('./assets')){
fs.mkdir("./assets",(err)=>{
    err?console.log(err):console.log("Directory was successfully created.")
})
}
else{
    fs.rmdir('./assets', (err)=>{
        err?console.log(err):console.log("deleted")
    })
}

//deleting files
if(fs.existsSync('./docs/blogs.txt')){
    fs.unlink('./docs/blogs.txt',(err)=>{
        err?console.log(err):console.log("Deleted successfully.")
    })
}