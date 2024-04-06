// const dotenv = require('dotenv')
const express = require('express');
const app = express()
const config = require('config')


require('./server/db')()
require('./server/antpoints')(app)


const port = process.env.PORT || 8080;
app.listen(port , () => {
    console.log(`port runing on port ${port}`);
})