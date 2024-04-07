const express = require('express');
const router = express.Router();
const { Arxiv } = require('../models/arxiv');


router.get('/get' , async (req , res) => {
    const data = await Arxiv.find()
    .select({__v: 0})
    res.send({data})

})


module.exports = router