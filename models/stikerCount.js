const mongoose = require('mongoose')
const stikerCountSchema = new mongoose.Schema({
    stikerCount: {
        type: String,
        required: true
    },
    isPrint: {
        type: Boolean,
        required: true
    },
    date: {
        type: Date,
        default: new Date()
    }
})


const StikerCount = mongoose.model('StikerCount' , stikerCountSchema);
exports.StikerCount = StikerCount