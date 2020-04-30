//Importing libraries
const express = require('express');
const router = require('./routes/index');
const port  = 8000;
const db = require('./config/mongoose');

//Creating app from express
const app = express();

//middlewares
app.use(express.urlencoded({extended: true}));
app.use(express.json()); //To recognize incoming requests as jason

//use express router
app.use('/', router);


//Server listening to port
app.listen(port, function(err){
    if(err){
        console.log(`Error:, ${err}`);
    }
    console.log(`Server is running on port: ${port}`);
});