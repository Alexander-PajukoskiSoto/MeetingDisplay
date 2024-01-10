const path = require('path');
const express = require("express");
const { PrismaClient } = require('@prisma/client');
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const multer = require('multer');

const prisma = new PrismaClient();

const PORT = process.env.PORT || 3001;

const app = express();

const loginTime = 1000 * 60 * 20;

app.use(session({
    secret: 'some secret',
    cookie: {maxAge: loginTime},
    saveUninitialized: false,
    resave: false
  }))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static(path.resolve(__dirname,'../client/build')));

console.log('express listening to server')

fetch(`https://api.openweathermap.org/data/2.5/weather?lat=59.2293827&lon=17.9748815&units=metric&appid=cfdeb26907457c26a1360e06821fc8b8`)
//converts to json
.then(weathRes => weathRes.json())
//runs function with data from API
.then(data => weatherFuncion(data));
let currentWeather = '';
function weatherFuncion(data){
    currentWeather = data;
}
app.get('/api',async(req,res)=>{
    try {
        let meetings = await prisma.Meetings.findMany()
        res.json(meetings)
        } catch (error) {
            console.log(error)
        }
    
})
app.get('/sessionApi',async(req,res)=>{
    try {
        res.json(!req.session.authenticated ? 'false':'true')
        } catch (error) {
            console.log(error)
        }
    
})
app.get('/weatherApiTemp', async (req, res) => {
    try {
      res.json(currentWeather);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
  });

app.post('/login', async(req,res)=>{
    try {
        let adminUser = await prisma.AdminUser.findFirst({
            where:{
                eMail: req.body.name
            }
        })
        console.log(adminUser);
        if(adminUser.password == req.body.password){
            req.session.authenticated = "true";
            res.redirect('/admin');
            console.log(req.session)
        }
        else(
            res.redirect('/login')
        )
        } catch (error) {
            console.log(error)
            res.redirect('/login')
        }
})
app.post('/createTime',async(req,res)=>{
    try {
        console.log(req)
        
        if(req.body.startDate <= req.body.endDate){
            const meeting = await prisma.Meetings.create({
                data:{
                  startDate: req.body.startDate,
                  endDate: req.body.endDate,
                  participators: req.body.participants,
                  title: req.body.title,
                  content: req.body.description,
                  reserved: req.body.reserved == 'on' ? 'true' : 'false'
                }
              })
              res.redirect('/admin')
        }
    } catch (error) {
        console.log(error,'error')
        res.redirect('/login')
    }
})

app.post('/reserve', async(req,res)=>{
    console.log(req.body)
    const meetings = await prisma.Meetings.findFirst({
        where: {
            startDate: req.body.startDate,
            AND: {
              endDate: req.body.endDate
            }
}})

    const reserve = await prisma.Meetings.update({
        where: {
            id: meetings.id
        },
        data: {
          startDate: req.body.startDate,
          endDate: req.body.endDate,
          title: req.body.title,
          participators: req.body.participants,
          content: req.body.content,
          reserved: 'true'
        },
      })
      res.redirect('/')
})
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

