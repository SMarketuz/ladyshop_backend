const express = require('express');
const router = express.Router();
const {Winners} = require('../models/winner');

router.post('/new' , async (req , res) => {
    const {stikerId , prisId} = req.body;
    if(!stikerId || !prisId)
        return res.status(400).json({
            status: false,
            massage: "Ma'lumot to'liq emas"
        })
    const data = await Winners.create({
        stikerId,
        prisId
    })
    let response = await data.save()
    res.send(response)
})
router.get('/get' , async (req , res) => {
    const data = await Winners.find()
    .populate(['stikerId' , 'prisId'])
    res.send({data})
})



module.exports = router