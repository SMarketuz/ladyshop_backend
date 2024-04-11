const express = require('express');
const router = express.Router();
const { Stiker } = require('../models/register_stiker');
const { Arxiv } = require('../models/arxiv')
const myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MTU0MTU2NDEsImlhdCI6MTcxMjgyMzY0MSwicm9sZSI6InVzZXIiLCJzaWduIjoiNjY1OTkzZTk5ZTg0OTZkNmQ1ZTE4ODgyMjFiODNhN2RiNWQwMGQ3M2RmZjZkZDQ5YWNiMDcyYmFkYjcwZjVhYSIsInN1YiI6IjY0MCJ9.bV-qvS4j4LU2jYjYuD1hhAU4Lnk71FlVHwrYmgcOmMY");



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

    // const formdata = new FormData();
    // formdata.append("mobile_phone", req.body.phoneNumber);
    // formdata.append("message", `${req.body.firstName} ${req.body.lastName}, siz ishtirokchiga aylandingiz. OMAD TILAYMIZ!`);
    // formdata.append("from", "4546");

    // const requestOptions = {
    //     method: "POST",
    //     headers: myHeaders,
    //     body: formdata,
    //     redirect: "follow"
    // };
    // let a = fetch("https://notify.eskiz.uz/api/message/sms/send", requestOptions)
    //     .then((response) => response.text())
    //     .then((result) => console.log(result))
    //     .catch((error) => console.error(error));
    // console.log(a);
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
            // await Stiker.deleteMany({ phoneNumber: a.phoneNumber })f
            let pres = await Arxiv.create({
                firstName: a.firstName,
                lastName: a.lastName,
                phoneNumber: a.phoneNumber,
                stikerId: a.stikerId,
                date: a.date
            })
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