const fs=require('fs')


const readStream=fs.createReadStream('./docs/blog5.txt' , {encoding:'utf8'})
const writeStream=fs.createWriteStream('./docs/blog.txt')
// readStream.on('data',(chunk)=>{
//      console.log('---------NEW CHUNK-------')
//      console.log(chunk)
//      writeStream.write('\n--------------New Chunk------------\n')
//      writeStream.write(chunk)
// })

//piping
readStream.pipe(writeStream)
