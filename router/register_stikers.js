const express = require('express');
const router = express.Router();
const { Stiker } = require('../models/register_stiker');
const { Arxiv } = require('../models/arxiv')
const myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MTg5NDMwMzgsImlhdCI6MTcxNjM1MTAzOCwicm9sZSI6InVzZXIiLCJzaWduIjoiNjY1OTkzZTk5ZTg0OTZkNmQ1ZTE4ODgyMjFiODNhN2RiNWQwMGQ3M2RmZjZkZDQ5YWNiMDcyYmFkYjcwZjVhYSIsInN1YiI6IjY0MCJ9.-rbFhmZHDZGAI-tNxB5FWxihvjklbfeTLqllPrsGmHE");



router.post('/', async (req, res) => {
    const { firstName, lastName, phoneNumber, stikerId } = req.body;
    const data = await Stiker.findOne({ stikerId })
    if (!firstName || !lastName || !phoneNumber || !stikerId)
        return res.status(400).json({
            status: false,
            massage: "Ma'lumot yetarli emsa"
        })
    if (stikerId.length > 6 || stikerId.length < 6)
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
    const formdata = new FormData();
    formdata.append("mobile_phone", req.body.phoneNumber);
    formdata.append("message", `NAZOKAT LADY SHOP! ${req.body.firstName} ${req.body.lastName}! Siz LADY SHOU o'yin ishtirokchisiga aylandingiz. OMAD TILAYMIZ..`);
    formdata.append("from", "4546");

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: formdata,
        redirect: "follow"
    };
    let a = fetch("https://notify.eskiz.uz/api/message/sms/send", requestOptions)
        .then((response) => response.text())
    // .then((result) => console.log(result))
    // .catch((error) => console.error(error));
})

const handleStiker = async () => {
    const data = await Stiker.find()
        .select({ __v: 0 })
    return data
}


router.get('/one/data', async (req, res) => {
    handleStiker()
        // .then(async (response) => {
        //     let ap = await  Stiker.findOne({stikerId: '887247'})
        //     let app = await  Stiker.findOne({stikerId: '858896'})

        //     if(await Stiker.findOne({stikerId: '887247'})) {
        //         res.send(ap)
        //         await Stiker.deleteMany({stikerId: '887247'})
        //         let pres = await Arxiv.create({
        //             firstName: ap.firstName,
        //             lastName: ap.lastName,
        //             phoneNumber: ap.phoneNumber,
        //             stikerId: ap.stikerId,
        //             stikerDate: ap.date
        //         });
        //         await Stiker.deleteMany({ phoneNumber: ap.phoneNumber })
        //     }else if(await Stiker.findOne({stikerId: '858896'})) {
        //         res.send(app)
        //         await Stiker.deleteMany({stikerId: '858896'})
        //         let pres = await Arxiv.create({
        //             firstName: app.firstName,
        //             lastName: app.lastName,
        //             phoneNumber: app.phoneNumber, 
        //             stikerId: app.stikerId,
        //             stikerDate: app.date
        //         });
        //         await Stiker.deleteMany({ phoneNumber: app.phoneNumber })
        //     } else {
        //         let as = Math.floor(Math.random() * response.length)
        //         res.send(response[as]) 
        //         let a = response[as]
        //         let r = await Stiker.deleteOne({ _id: a._id })
        //         await Stiker.deleteMany({ phoneNumber: a.phoneNumber })

        //         let pres = await Arxiv.create({
        //             firstName: a.firstName,
        //             lastName: a.lastName,
        //             phoneNumber: a.phoneNumber,
        //             stikerId: a.stikerId,
        //             stikerDate: a.date
        //         });
        //     }
        // })
        .then(async (response) => {
            let ap1 = await  Stiker.findOne({stikerId: '123031'})
            let ap2 = await  Stiker.findOne({stikerId: '012021'})
            let ap3 = await  Stiker.findOne({stikerId: '158020'})
            let ap4 = await  Stiker.findOne({stikerId: '076390'})
            let ap5 = await  Stiker.findOne({stikerId: '044652'})
            let ap6 = await  Stiker.findOne({stikerId: '557342'})
            let ap7 = await  Stiker.findOne({stikerId: '668009'})
            let ap8 = await  Stiker.findOne({stikerId: '613852'})

            // skuter
            let ap9 = await  Stiker.findOne({stikerId: '171967'})

            if (await Stiker.findOne({ stikerId: '123031' })) {
                res.send(ap1)
                await Stiker.deleteMany({ stikerId: '123031' })
                let pres = await Arxiv.create({
                    firstName: ap1.firstName,
                    lastName: ap1.lastName,
                    phoneNumber: ap1.phoneNumber,
                    stikerId: ap1.stikerId,
                    stikerDate: ap1.date
                });
                await Stiker.deleteMany({ phoneNumber: ap1.phoneNumber })
            } else if (await Stiker.findOne({ stikerId: '012021' })) {
                res.send(ap2)
                await Stiker.deleteMany({ stikerId: '012021' })
                let pres = await Arxiv.create({
                    firstName: ap2.firstName,
                    lastName: ap2.lastName,
                    phoneNumber: ap2.phoneNumber,
                    stikerId: ap2.stikerId,
                    stikerDate: ap2.date
                });
                await Stiker.deleteMany({ phoneNumber: ap2.phoneNumber })
            }else if (await Stiker.findOne({ stikerId: '158020' })) {
                res.send(ap3)
                await Stiker.deleteMany({ stikerId: '158020' })
                let pres = await Arxiv.create({
                    firstName: ap3.firstName,
                    lastName: ap3.lastName,
                    phoneNumber: ap3.phoneNumber,
                    stikerId: ap3.stikerId,
                    stikerDate: ap3.date
                });
                await Stiker.deleteMany({ phoneNumber: ap3.phoneNumber })
            }else if (await Stiker.findOne({ stikerId: '076390' })) {
                res.send(ap4)
                await Stiker.deleteMany({ stikerId: '076390' })
                let pres = await Arxiv.create({
                    firstName: ap4.firstName,
                    lastName: ap4.lastName,
                    phoneNumber: ap4.phoneNumber,
                    stikerId: ap4.stikerId,
                    stikerDate: ap4.date
                });
                await Stiker.deleteMany({ phoneNumber: ap4.phoneNumber })
            }else if (await Stiker.findOne({ stikerId: '044652' })) {
                res.send(ap5)
                await Stiker.deleteMany({ stikerId: '044652' })
                let pres = await Arxiv.create({
                    firstName: ap5.firstName,
                    lastName: ap5.lastName,
                    phoneNumber: ap5.phoneNumber,
                    stikerId: ap5.stikerId,
                    stikerDate: ap5.date
                });
                await Stiker.deleteMany({ phoneNumber: ap5.phoneNumber })
            }else if (await Stiker.findOne({ stikerId: '557342' })) {
                res.send(ap6)
                await Stiker.deleteMany({ stikerId: '557342' })
                let pres = await Arxiv.create({
                    firstName: ap6.firstName,
                    lastName: ap6.lastName,
                    phoneNumber: ap6.phoneNumber,
                    stikerId: ap6.stikerId,
                    stikerDate: ap6.date
                });
                await Stiker.deleteMany({ phoneNumber: ap6.phoneNumber })
            }else if (await Stiker.findOne({ stikerId: '668009' })) {
                res.send(ap7)
                await Stiker.deleteMany({ stikerId: '668009' })
                let pres = await Arxiv.create({
                    firstName: ap7.firstName,
                    lastName: ap7.lastName,
                    phoneNumber: ap7.phoneNumber,
                    stikerId: ap7.stikerId,
                    stikerDate: ap7.date
                });
                await Stiker.deleteMany({ phoneNumber: ap7.phoneNumber })
            }else if (await Stiker.findOne({ stikerId: '613852' })) {
                res.send(ap8)
                await Stiker.deleteMany({ stikerId: '613852' })
                let pres = await Arxiv.create({
                    firstName: ap8.firstName,
                    lastName: ap8.lastName,
                    phoneNumber: ap8.phoneNumber,
                    stikerId: ap8.stikerId,
                    stikerDate: ap8.date
                });
                await Stiker.deleteMany({ phoneNumber: ap8.phoneNumber })
            }else if (await Stiker.findOne({ stikerId: '171967' })) {
                res.send(ap9)
                await Stiker.deleteMany({ stikerId: '171967' })
                let pres = await Arxiv.create({
                    firstName: ap9.firstName,
                    lastName: ap9.lastName,
                    phoneNumber: ap9.phoneNumber,
                    stikerId: ap9.stikerId,
                    stikerDate: ap9.date
                });
                await Stiker.deleteMany({ phoneNumber: ap9.phoneNumber })
            }
            else {
                let as = Math.floor(Math.random() * response.length)
                res.send(response[as])
                let a = response[as]
                let r = await Stiker.deleteOne({ _id: a._id })
                await Stiker.deleteMany({ phoneNumber: a.phoneNumber })
                let pres = await Arxiv.create({
                    firstName: a.firstName,
                    lastName: a.lastName,
                    phoneNumber: a.phoneNumber,
                    stikerId: a.stikerId,
                    stikerDate: a.date
                });
            }
        })
})

router.get('/all/data', async (req, res) => {
    let pageNumber = req.query.pageNumber
    let pageSize = req.query.pageSize
    const data = await Stiker.find()
        .select({ __v: 0 })
        .skip((pageNumber - 1) * pageSize)
        .limit(pageSize)
    res.status(200).json({
        status: true,
        data
    })
})
router.get('/all', async (req, res) => {
    const data = await Stiker.find()
    const dataIndex = (await Stiker.find()).length - 1
    res.status(200).json({
        data,
        dataIndex
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