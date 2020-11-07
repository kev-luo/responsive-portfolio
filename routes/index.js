const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { title: 'Home' });
})

router.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact' });
})

router.get('/portfolio', (req, res) => {
  res.render('portfolio', { title: 'Portfolio' });
})

module.exports = router;