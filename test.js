const mongoose = require('mongoose')

const dbURL = 'mongodb+srv://patrick:test123@cluster0.d4ltffq.mongodb.net/node-tuts?retryWrites=true&w=majority'

mongoose.connect(dbURL)
.then(() => {
    console.log('MongoDB Connected')
})
.catch(err => {
    console.log(err)
})