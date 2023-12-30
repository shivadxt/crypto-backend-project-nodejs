This is a simple cryptocurrency price conversion application:
 - We have setup the server 
 - Installed required packages : Express and Axios
 - Then moved to Coin geco documentation for API tested the required end point on swagger: 
 GET - /coins​/markets (We'll be using this to get top 100 Cryptocurrencies)
 List all supported coins price, market cap, volume, and market related data
- Recieved Top 100 crypto Data on our local
![Alt text](</screenshots/Screenshot from 2023-12-30 18-58-50.png>)


Setting route for 2nd API to get the conversion rate :
- Route setup 
- Passing required parameters in Params  
- Added formula to calculate the conversion of the cryptocurrency to selected currency
![Alt text](</screenshots/Screenshot from 2023-12-30 19-16-22.png>)