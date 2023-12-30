const { default: axios } = require('axios');
const express = require('express');

const app = express();

app.listen(2000,()=> {
    console.log(`Server is started`);
})

app.get('/',(req,res)=>{
    res.send("Crypto Currency Converter");
})

app.get('/top100', async (req, res) => {
    try {
      const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
        params: {
          vs_currency: 'usd', // You can change this to get the prices in a different currency
          per_page: 100,
          page: 1,
          sparkline: false,
        },
      });
  
      res.json(response.data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });