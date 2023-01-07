var express = require('express');
var router = express.Router();

const list = ['Carlos', 'José', 'Marques', 'Novo nome']

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', {
    title: 'Bem-vindos!',
    subtitle: 'A aula de hoje é uma revisão sobre express',
    list: list,
    date: (new Date()).toLocaleString()
  });
});

router.post('/api/users', (req, res, next) => {
  res.json({
    test: 1,
    list,
  })
});



module.exports = router;
