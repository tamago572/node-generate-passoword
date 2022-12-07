var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Password generator' });
});

router.post("/generate", (req, res) => {
  res.send(req.body.msg);
});

module.exports = router;
