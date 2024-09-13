const express= require('express');
const router= express.Router();

router.get('/',()=>{
  res.send('hello,world');
})

module.exports = router;
const express = require('express');
const path = require('path');
const router = require('./routes');
const { appendFile } = require('fs');

app.use(express.static('public'));

const PORT= process.env.PORT|| 3000;
app.listen(PORT,()=>{
  console.log('servidor iniciado')
})