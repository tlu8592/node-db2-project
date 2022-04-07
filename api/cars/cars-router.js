// DO YOUR MAGIC
const router = require('express').Router();
const Car = require('./cars-model');

router.get('/', async (req, res) => {
    const cars = await Car.getAll();
    if (!cars) {
        res.send([]);
    } else {
        res.json(cars);
    }
})

module.exports = router;