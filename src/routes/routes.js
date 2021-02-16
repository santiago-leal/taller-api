const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('Welcome to my API');
});

module.exports = router;

