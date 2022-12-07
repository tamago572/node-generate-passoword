var express = require('express');
var router = express.Router();

router.post("/", (req, res) => {
    res.render('generate', { password: req.body.length });
});

module.exports = router;
