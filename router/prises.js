const express = require('express');
const router = express.Router();
const {Pris} = require('../models/pris');


router.post('/new' , async (req , res) => {
    const {url , name} = req.body;
    if(!url || !name) 
        return res.status(400).json({
            status: false,
            massage: "Ma'lumot to'liq emas"
        })
    const data = await Pris.create({
        url,
        name
    })
    await data.save();
    res.status(201).json({
        status: true,
        massage: "Sovg'a qo'shildi"
    })
})


router.get('/get' , async (req , res) => {
    const data = await Pris.find()
    .select({__v: 0})

    res.json({
        status: true,
        data
    })
})

router.post('/delete/:di' , async (req , res) => {
    const data = await Pris.deleteOne({_id: req.params.id})
    res.status(200).json({
        status: true,
        massage: "Sovg'a o'chirildi"
    })
})



module.exports = router