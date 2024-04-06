const { default: mongoose } = require("mongoose");
const { type } = require("os");


const prisSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
})

const Pris = mongoose.model('Pris' , prisSchema)
exports.Pris = Pris