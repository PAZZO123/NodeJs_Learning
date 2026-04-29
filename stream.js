const fs=require('fs')

const readStream=fs.createReadStream('./docs/blog.txt',{encoding:'utf8'} )
const writeStream=fs.createWriteStream('./docs/blog5.txt')

readStream.on('data', (chunk)=>{
    console.log("-----new chunk-------- \n")
console.log(chunk,'\n')
 writeStream.write('\n ---New Chunk ------\n')
 writeStream.write(chunk)
})
//readStream.pipe(writeStream) this will read and write at the same time every chunk.