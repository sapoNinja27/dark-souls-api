const express = require('express')
const app = express()
const port = process.env.port || 8080
const routes = require('./routes')

app.use('/api', routes)
app.listen(port, function(){
    console.log('Server initiated')
})