const { default: mongoose } = require("mongoose");


const stikerSchema = new mongoose.Schema({
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
    date: {
        type: Date ,
        default: new Date()
    }
})

const Stiker = mongoose.model('Stiker' , stikerSchema);

exports.Stiker = Stiker
