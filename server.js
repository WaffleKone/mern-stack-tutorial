// DEPENDENCIES 
const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config({path: './config.env'});
const port = process.env.PORT || 5000; // If can't find the right port from env file, use 5000 instead using the OR operator.

app.use(express.static("./client/build"))
app.use(cors());
app.use(express.json());
app.use(require('./routes/record'));

const dbo = require('./db/conn')

app.listen(port, () => {
    dbo.connectToServer(function (err) {
        if (err) console.error(err);
    });
    console.log(`Server is running on port ${port}`)
});