const express = require('express');
const app = express();
const shops = require('./routes/shop');
const accounts = require('./routes/account');
const articles = require('./routes/article');
const devs = require('./routes/dev');
const connectDB = require('./db/connect');

require('dotenv').config();



// Middleware

app.use(express.static('./public'));
app.use(express.json());


// routes

app.use('/api/v1/accounts', accounts);
app.use('/api/v1/shops', shops);
app.use('/api/v1/articles', articles);
app.use('/api/v1/devs', devs);


const port = process.env.PORT || 3001;

const start = async () => {
    try{
        await connectDB(process.env.MONGO_URI);
        app.listen(port, console.log(`Server is listening on port ${port}...`));
    }catch(error){
        console.log(error);
    }
}



start();