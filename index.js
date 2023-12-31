const { default: axios } = require('axios');
const express = require('express');
const cors = require('cors');

const app = express();

app.listen(2000,()=> {
    console.log(`Server is started`);
})

app.use(cors()); 

app.get('/',(req,res)=>{
    res.send(" Welcome to Crypto Currency Converter : To fetch top 100 crypto plese visit- https://crypto-backend-project-nodejs-ad3jex19b.vercel.app/top100 , To get conversion rates please follow - https://crypto-backend-project-nodejs-ad3jex19b.vercel.app/convert/'crypto name'/'amount'/'curency' ");
})

app.get('/top100', async (req, res) => {
    try {
      const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
        params: {
          vs_currency: 'usd', 
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


app.get('/convert/:source/:amount/:target', async (req, res) => {
    const { source, amount, target } = req.params;

    try {
        const response = await axios.get('https://api.coingecko.com/api/v3/simple/price', {
        params: {
          ids: source,
          vs_currencies: target,
        },
      });

      if (!response.data || !response.data[source] || !response.data[source][target]) {
        return res.status(404).json({ error: 'Conversion not supported or invalid cryptocurrency' });
      }

      const conversionRate = response.data[source][target];
      const convertedAmount = amount * conversionRate;

      res.json({
        source,
        amount: parseFloat(amount),
        target,
        convertedAmount: parseFloat(convertedAmount.toFixed(2)),
      });
        
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
  });