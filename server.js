const express = require('express');
const logger = require('morgan');
const cors = require('cors');


require('dotenv').config();
require('./config/database');


const app = express(); 


app.use(express.json());
app.use(logger('dev'));
app.use(cors());



app.use('/api/areas', require('./routes/api/areas'))
app.use('/api/users', require('./routes/api/users'));


const port = process.env.PORT || 3001; 
app.listen(port, function () {
    console.log(`Express is listening on port ${port}`);
});