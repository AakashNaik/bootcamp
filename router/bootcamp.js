const express = require('express');

const router = express.Router();

router.get('/',
(req,res)=>{console.log('get method called'); res.send('<h1>confirmed get</h1>')});

router.post('/',
(req,res)=>{console.log('get method called'); res.send('confirmed post')});

router.delete('/:id',
(req,res)=>{console.log('get method called'); res.send(`confirmed delete id: ${req.params.id}`)});

router.put('/:id',
(req,res)=>{console.log('get method called'); res.send(`confirmed put id: ${req.params.id}`)});

module.exports = router;