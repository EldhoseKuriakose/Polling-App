//require library
const mongoose = require('mongoose');

//connect to the database
mongoose.connect('mongodb://localhost/polling_app');


//acquire the connection to check if it is successful
const db = mongoose.connection;


//error in connecting to database
db.on('error', console.error.bind(console, 'error connecting to db'));


//up and running the print message
db.once('open', function(){
    console.log('Successfully connected to the database');
});