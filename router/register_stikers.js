const express = require('express');
const router = express.Router();
const { Stiker } = require('../models/register_stiker');

router.post('/', async (req, res) => {
    const { firstName, lastName, phoneNumber, stikerId } = req.body;
    const data = await Stiker.findOne({ stikerId })
    if (!firstName || !lastName || !phoneNumber || !stikerId)
        return res.status(400).json({
            status: false,
            massage: "Ma'lumot yetarli emsa"
        })
    if (stikerId.length > 4 || stikerId.length < 4)
        return res.status(400).json({
            status: false,
            massage: "Stiker to'g'ri emas"
        })
    if (typeof phoneNumber != 'number')
        return res.status(400).json({
            status: false,
            massage: "Telefon to'g'ri emas"
        })
    if (data)
        return res.status(400).json({
            status: false,
            massage: "Siz oldin ro'yxatdan o'tkansz"
        })
    const request = await Stiker.create({
        firstName,
        lastName,
        phoneNumber,
        stikerId
    })

    await request.save()
    res.status(201).json({
        status: true,
        massage: "Tabriklaymiz siz konkurs ishtirokchisiga aylandingiz"
    })
})

const handleStiker = async () => {
    const data = await Stiker.find()
        .select({ __v: 0 })
    return data
}


router.get('/one/data', async (req, res) => {
    handleStiker()
        .then(async (response) => {
            let as = Math.floor(Math.random() * response.length)
            res.send(response[as])
            let a = response[as]
            // let r = await Stiker.deleteOne({ _id: a._id })
            let p = await Stiker.deleteMany({phoneNumber: a.phoneNumber})
            // const pres = await
        })
})

router.get('/all/data', async (req, res) => {
    const data = await Stiker.find()
        .select({ __v: 0 })
    res.status(200).json({
        status: true,
        data
    })
})

router.post('/delete/data/:id', async (req, res) => {
    if (!req.params.id)
        return res.status(400).json({
            status: false,
            massage: "Ma'lumot to'liq emas"
        })
    const data = await Stiker.deleteOne({ _id: req.params.id })
    if (!data)
        return res.status(404).json({
            status: false,
            massage: "Buday ishtirokchi mavjud emas"
        })
    res.status(200).json({
        status: true,
        massage: "Ishtirokchi o'chirildi"
    })
})


module.exports = router