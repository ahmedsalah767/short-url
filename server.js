const dotenv = require('dotenv');
const app = require('./app');
const mongoose = require('mongoose')
dotenv.config({ path: './config.env' });

const a = 'mongodb://127.0.0.1:27017/url'
const db = 'mongodb+srv://ahmed:uAdkc0BkoBEOGhDP@short-url.eeshtbw.mongodb.net/?retryWrites=true&w=majority'
mongoose  
.connect(db,{ 
}).then(con =>{  
  console.log('successful')    
})



const port = 3000
const server = app.listen(port, () => {
    console.log(`App running on port ${port}...`);
  });