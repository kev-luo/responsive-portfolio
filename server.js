require('dotenv').config();
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');
const db = require('./models');
const app = express();

app.use(expressLayouts);
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(path.join(__dirname,'public')));

app.use('/', require('./routes'));
app.use('/api', require('./routes/api'));

const port = process.env.PORT || 5000;

db.sequelize.sync().then(() => {
  app.listen(port, err => {
    if (err) throw err;
    console.log(`connected on port ${port}`)
  })
});

// {force:true}