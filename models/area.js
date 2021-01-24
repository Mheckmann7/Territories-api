const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./user');

const areaSchema = new Schema({
    username: String, 
    // userId: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User'
    // }, //reference the player that is logged in 
    lat: Number,
    lng: Number,
    time: Date
    
}, { timestamps: true });



module.exports = mongoose.model('Area', areaSchema)