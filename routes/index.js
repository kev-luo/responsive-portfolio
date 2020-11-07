const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/', (req, res) => {
  res.render('index', { title: 'Home' });
})

router.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact' });
})

router.get('/portfolio', (req, res) => {
  console.log(req.projects);
  res.render('portfolio', { title: 'Portfolio' });
})

module.exports = router;