const mongoose = require('mongoose')

const dbURL = 'mongodb+srv://ijpazzo:ijpazzo@cluster0.d4ltffq.mongodb.net/myDatabase?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(dbURL)
.then(() => {
    console.log('MongoDB Connected')
})
.catch(err => {
    console.log(err)
})