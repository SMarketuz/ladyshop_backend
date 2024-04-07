const express = require('express');
const router = express.Router();
const {Winners} = require('../models/winner');

router.post('/new' , async (req , res) => {
    const {firstName,lastName,phoneNumber,stikerId , prisId} = req.body;
    if(!firstName || !lastName || !phoneNumber || !stikerId || !prisId)
        return res.status(400).json({
            status: false,
            massage: "Ma'lumot to'liq emas"
        })
    if(!phoneNumber.typeOf == 'number')
        return res.status(400).json({
            status: false,
            massage: "Telefon to'g'ri emas"
        })
    const data = await Winners.create({
        firstName, 
        lastName,
        phoneNumber,
        stikerId,
        prisId
    })
    let response = await data.save()
    res.send(response)
})
router.get('/get' , async (req , res) => {
    const data = await Winners.find()
    .select({__v: 0})
    .populate('prisId' , '-__v')
    res.send({data})
})



module.exports = router