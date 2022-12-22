const express = require('express');
require('dotenv').config()




const app = express();


app.get('/api/v1/bootcamps',
(req,res)=>{console.log('get method called'); res.send('<h1>confirmed get</h1>')});

app.post('/api/v1/bootcamps',
(req,res)=>{console.log('get method called'); res.send('confirmed post')});

app.delete('/api/v1/bootcamps/:id',
(req,res)=>{console.log('get method called'); res.send(`confirmed delete id: ${req.params.id}`)});

app.put('/api/v1/bootcamps/:id',
(req,res)=>{console.log('get method called'); res.send(`confirmed put id: ${req.params.id}`)});


app.listen(process.env.PORT, ()=>{console.log(`${process.env.env} app started at ${process.env.PORT}`)})

