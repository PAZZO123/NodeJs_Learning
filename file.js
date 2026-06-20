const fs=require('fs')
//readfile
fs.readFile('./docs/blogs1.txt', (err, data)=>{
    if(err){
        console.log(err)
    }
    console.log(data.toString())
})

//writting file
fs.writeFile('./docs/blogs1.txt',"Hello , Justine", ()=>{
    console.log('File was written')
})

//dierectories
if(!fs.existsSync('./assets')){
    fs.mkdir('./assets',(err)=>{
    if(err){
        console.log(err)
    }else{
    console.log('Folder was created')}2
})

}else{
    fs.rmdir('./assets', (err)=>{
        if(!err){
            console.log('Folder Deleted')
        }
    })
}

//deleting files
if(fs.existsSync('./docs/delete.txt')){
    fs.unlink('./docs/delete.txt' , (err)=>{
    if(err){
        console.log(err)
    }
    console.log('File was deleted successfully')
    })
}