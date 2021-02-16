const router = require('express').Router();

// Database connection
require('../database');

router.get('/', (req, res) => {
    res.send('Task');
});

module.exports = router;