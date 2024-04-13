const express = require('express');
const router = express.Router();
const {StikerCount} = require('../models/stikerCount');

router.post('/new' , async (req , res) => {
    const valid = await StikerCount.findOne({stikerCount: req.body.stikerCount})
    if(valid)
        return res.status(400).json({
            status: false,
            massage: "Bunday raqam mavjud"
        })
    const createData = await StikerCount.create({
        stikerCount: req.body.stikerCount,
        isPrint: false
    })

    const result = await createData.save()
    res.status(201).json({
        status: true,
        massage: "Stiker raqami yasaldi"
    })
    
})
router.get('/get' , async (req , res) => {
    const data = await StikerCount.find()
    .select({__v: 0})
    res.send({data})
})

router.put('/update/:id' , async (req , res) => {
    const editData = await StikerCount.updateOne({_id: req.params.id} , {
        $set: {
            isPrint: req.body.isPrint
        }
    })
    res.send(editData)
})



module.exports = router