const express = require('express')
const cors = require('cors')
const antpoints = (app) => {
    app.use(cors())
    app.use(express.json())
    app.use('/api/stiker/register' , require('../router/register_stikers'))
}

  
module.exports = antpoints