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
        min: 6,
        max: 6
    },
    stikerDate: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now()
    }
})


const Arxiv = mongoose.model('Arxiv' , arxivSchema);

exports.Arxiv = Arxiv