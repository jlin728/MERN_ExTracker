const express = require('express');
const cors = require('cors');
//Now included in the new Express 
//const bodyparser = require('body-parser');
const mongoose = require('mongoose');

require('dotenv').config();

//Create express server
const app = express();
const port = process.env.PORT || 5000;

//Middleware to parse Json
app.use(cors());
app.use(express.json());

//Get this from MongoDB dashboard
const uri = process.env.ATLAS_URI;
//uri is where the db is stored. { , } are flags that deal with updates in deprecated functionality
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
    );

const connection = mongoose.connection;
connection.once('open', ()=>{
    console.log("MongoDB database connection established successfully");
})

//CRUD Routes

const exerciseRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

//Whenever someone hits root /xyz route, exerciseRouter will load
app.use('/exercises', exerciseRouter);
app.use('/users', usersRouter);


app.listen(port, ()=>{
    console.log(`Server is running on port: ${port}`);
});