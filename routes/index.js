const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("Web services Project 1 - Andrea Brenzink ");
});

router.use('/contacts', require('./contacts'));

module.exports = router;
