const { default: mongoose } = require("mongoose");


const arxivSchema = new mongoose.Schema({
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
    stikerDate: {
        type: String,
        required: true
    },
    date: {
        type: Date ,
        default: new Date()
    }
})


const Arxiv = mongoose.model('Arxiv' , arxivSchema);

exports.Arxiv = Arxiv