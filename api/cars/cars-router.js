// DO YOUR MAGIC
const router = require('express').Router();
const Car = require('./cars-model');
const {
    checkCarId
} = require('./cars-middleware');

router.get('/', async (req, res) => {
    const cars = await Car.getAll();
    if (!cars) {
        res.send([]);
    } else {
        res.json(cars);
    }
})

router.get('/:id', checkCarId, (req, res, next) => {
    res.json(req.car);
});

// router.post('/', (req, res, next) => {

// })

router.use((err, req, res, next) => {
    res.status(500).json({
        message: err.message,
    })
})

module.exports = router;