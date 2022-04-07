// DO YOUR MAGIC
const router = require('express').Router();
const Car = require('./cars-model');

router.get('/', (req, res) => {
    res.send("Hello from Cars Router");
})

module.exports = router;