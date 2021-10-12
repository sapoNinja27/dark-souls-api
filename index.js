const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.port || 8080
const routes = require('./routes')

app.use(cors())
app.use('/api', routes)
app.listen(port, function(){
    console.log('Server initiated')
})