const mongoose = require('mongoose')
const winnerSchema = new mongoose.Schema({
    // stikerId: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Stiker'
    // },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    stikerId: {
        type: String,
        required: true,
        min: 4,
        max: 4
    },
    prisId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pris'
    },
    date: {
        type: Date,
        default: new Date()
    }
})


const Winners = mongoose.model('Winners' , winnerSchema);
exports.Winners = Winners