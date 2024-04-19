const mongoose = require('mongoose');
const config = require('config')

const connectServer = () => {
    // mongoose.connect('mongodb://127.0.0.1:27017/myapp') 
    mongoose.connect(config.get('server')) 
        .then(res => {
            console.log('mongo is working');
        }).catch(err => {
            console.log('mongo has error', err);
        })
} 


module.exports =  connectServer