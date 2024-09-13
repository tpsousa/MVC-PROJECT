const express = require('express');
const path = require('node:path');
const ejs = require('ejs');
const app = express();


app.set('view engineer','ejs')
app.set('views',path.join(__dirname,'views'))
app.use(express.urlencoded({extended: true}))

const port=process.env.port||3000;
app.listen(port,()=>{
  console.log('o servidor esta funcionando com sucesso!');  
});


