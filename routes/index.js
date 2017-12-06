var express = require('express');
var router = express.Router();

/* GET home page. */
var items = [
    { "text": "1st Post." }
    , { "text": "2nd Post." }
];

router.get('/', function(req, res) {
  res.render('index', { title: 'Entry List',items: items });
});


router.get('/form', function(req, res) {
    res.render('form', { title: '新規作成' })
});

router.post('/create', function(req, res){
    console.log(req.body.text);
    res.redirect('/');
});

module.exports = router;