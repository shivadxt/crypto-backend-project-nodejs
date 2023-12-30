const { default: axios } = require('axios');
const express = require('express');

const app = express();

app.listen(2000,()=> {
    console.log(`Server is started`);
})

app.get('/',(req,res)=>{
    res.send("Crypto Currency Converter");
})
