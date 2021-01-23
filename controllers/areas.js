const Area = require('../models/area');
//const User = require('../models/user');

module.exports = {
    createAreas, 
    getAreas

}
//Fake Data need to replace fake data tha is being calle din res.json with real data from mongoDV
// const markers = [{
//     lat: 37.334789,
//     lng: -121.888138,
//     time: new Date()
// },
// {
//     lat: 37.23234,
//     lng: -121.998138,
//     time: new Date()
//     },
// {
//         lat: 37.24234,
//         lng: -121.778138,
//         time: new Date()
// },
// ]

//function to get areas that have previosly been submitted by the player from MongoDB
async function getAreas(req, res) {
    try {
        //const userId = await User.findOne({userId: req.body.username}) 
        const markers = await Area.find({})
        res.json(markers); //need to get real data from MongoDB
    } catch(err){

    }

}

//save the areas that have been created by the player (coordinates have been saved inside )
//ned to add the logged in users _id (or username?) for referencing purposes 
async function createAreas(req, res) {
    try {
        await Area.create(req.body);
        getAreas(req, res);
    } catch (err) {
        res.json({ err });
    }
}
