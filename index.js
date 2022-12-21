const express = require('express');
require('dotenv').config()




const app = express();

app.listen(process.env.PORT, ()=>{console.log(`${process.env.env} app started at ${process.env.PORT} `)})


