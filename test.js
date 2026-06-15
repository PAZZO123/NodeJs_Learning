const mongoose = require('mongoose')


mongoose.connect(dbURL)
.then(() => {
    console.log('MongoDB Connected')
})
.catch(err => {
    console.log(err)
})
