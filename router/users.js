const express = require('express');
const router = express.Router();
const { User } = require('../models/user');


router.post('/create', async (req, res) => {
    const valid = await User.findOne({ username: req.body.username })
    if (valid)
        return res.status(400).json({
            status: false,
            massage: "Bunday ma'lumot mavjud"
        })
    if (!req.body.username || !req.body.isAdmin)
        return res.status(400).json({
            status: false,
            massage: "Ma'lumot to'liq emas"
        })
    const data = await User.create({
        username: req.body.username,
        isAdmin: req.body.isAdmin
    })
    await data.save();
    res.status(201).json({
        status: true,
        massage: "Ma'lumot saqlandi"
    })
}) 

router.post('/login', async (req, res) => {
    const data = await User.findOne({username: req.body.username})
    if(!data)
    return res.status(404).json({
        status: false,
        massage: "Bunday admin mavjud emas"
    })
    const valid = await User.find({ username: req.body.username })

    res.send(valid)
})


module.exports = router