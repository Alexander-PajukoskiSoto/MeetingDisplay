const path = require('path');
const express = require("express");
const { PrismaClient } = require('@prisma/client');


const PORT = process.env.PORT || 3001;

const app = express();

app.get('/',(req,res)=>{
    res.json('hello, running')
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

