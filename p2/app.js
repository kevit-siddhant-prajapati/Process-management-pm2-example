const express = require('express');
const port = 3002
const app = express()
const morgan = require('morgan')

app.use(morgan('dev'))

app.get('/sid', (req, res) => {
    res.send({
        id : 1,
        name : "Siddhant"
    })
})

app.get('/raj', (req, res) => {
    res.send({
        id : 1,
        name : "Rajkumar"
    })
})

app.listen( port, () =>{
    console.log('App is running on port ' , port)
    console.log('project :', process.env.PROJECT_NAME)
})