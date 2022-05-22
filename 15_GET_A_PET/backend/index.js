const express = require('express')
const cors = require('cors')

const app = express()

//config json response
app.use(express.json())

//Solve cors
app.use(cors({
    credentials: true,
    origin:'http://localhost:3000'
}))

//public folders
app.use(express.static('public'))

//routes



app.listen(5000)