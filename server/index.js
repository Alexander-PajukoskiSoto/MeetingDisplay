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

fetch('https://api.openweathermap.org/data/2.5/weather?lat=59.2293827&lon=17.9748815&units=metric&appid=cfdeb26907457c26a1360e06821fc8b8')
//converts to json
.then(weathRes => weathRes.json())
//runs function with data from API
.then(data => weatherFuncion(data));
let currentWeather = '';
function weatherFuncion(data){
    currentWeather = data;
    console.log(currentWeather);
}


app.get('/api',(req,res)=>{
    res.json('hello, running')
})
app.get('/weatherApiTemp', async (req, res) => {
    try {
      res.json(currentWeather);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
  });
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

