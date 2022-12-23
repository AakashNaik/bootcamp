const express = require('express');
require('dotenv').config()

const bootcamp_router = require('./router/bootcamp.js');



const app = express();

app.use('/api/v1/bootcamps', bootcamp_router);



app.listen(process.env.PORT, ()=>{console.log(`${process.env.env} app started at ${process.env.PORT}`)})

