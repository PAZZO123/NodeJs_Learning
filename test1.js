const fs =require('fs/promises')

fs.readFile('./docs/blogs1.txt','utf-8')

.then(res=>console.log(res))
.catch(er=>console.log(er))

process.nextTick(()=>console.log("From NextTick"))