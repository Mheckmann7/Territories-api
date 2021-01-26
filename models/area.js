const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./user');

const areaSchema = new Schema({
    username: String, 
    lat: Number,
    lng: Number,
    time: Date,
    
}, { timestamps: true });



module.exports = mongoose.model('Area', areaSchema)