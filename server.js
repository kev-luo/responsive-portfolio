const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));



const port = process.env.PORT || 5000;

app.listen(port, err => {
  if (err) throw err;
  console.log(`connected on port ${port}`)
})