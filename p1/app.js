const express = require('express');
const morgan = require('morgan')
const port = 3001
const app = express()

app.use(morgan('dev'))

app.get('/ram', (req, res) => {
    res.send({
        id : 1,
        name : "Ram"
    })
})

app.get('/riya', (req, res) => {
    res.send({
        id : 1,
        name : "Riya"
    })
})

app.listen(port, () =>{
    console.log('App is running on port ', port)
    console.log('project :', process.env.PROJECT_NAME)
})