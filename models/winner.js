const mongoose = require('mongoose')
const winnerSchema = new mongoose.Schema({
    stikerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Stiker'
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