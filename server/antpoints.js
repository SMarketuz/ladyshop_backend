const express = require('express')
const cors = require('cors')
const antpoints = (app) => {
    app.use(cors())
    app.use(express.json())
    app.use('/api/stiker/register' , require('../router/register_stikers'))
    app.use('/api/pris' , require('../router/prises'))
    app.use('/api/winners' , require('../router/winners'))
}

  
module.exports = antpoints