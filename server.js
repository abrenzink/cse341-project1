require('dotenv').config();

const mongodb = require('./data/database');

const express = require('express');
const app = express();

const port = process.env.PORT;

app.use('/', require('./routes'));


mongodb.initDb((err) => {
    if(err){
        console.log(err);
    }
    else{
        app.listen(port, () => {console.log('Db is listening and Node running on port ' + port)});
    }
})

