const path = require('path');
const express = require("express");
const { PrismaClient } = require('@prisma/client');
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const multer = require('multer');


const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static(path.resolve(__dirname,'../client/build')));

console.log('express listening')

app.get('/api',(req,res)=>{
    res.json('hello, running')
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

