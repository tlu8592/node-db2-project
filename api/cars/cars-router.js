// DO YOUR MAGIC
const express = require('express')
const Car = require('./cars-model')
const {
    checkCarId
} = require('./cars-middleware')
const router = express.Router()

router.get('/', async (req, res, next) => {
    try {
        const cars = await Car.getAll()
        res.json(cars)
    } catch (err) {
        next(err)
    }
})

router.get('/:id', checkCarId, async (req, res, next) => {
    try {
        res.json(req.car)
    } catch (err) {
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    res.json('posting new car')
})

module.exports = router;