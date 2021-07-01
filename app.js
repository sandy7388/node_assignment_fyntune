const express = require('express'); //Import The Packege
const app = express(); //We Exicute it
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

require('dotenv/config');

// app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())

// import ROUTES
const userRoute = require('./routes/users.route');

app.use('/api/user', userRoute);

//CONNECTTO DB HERE
mongoose.connect(
  process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  () => console.log('CONNECTED TO DATABASE!!!!')

);
// HOW TO WE START A LISTNING SERVER
app.listen(3000, () => console.log('Server is running on 3000'));