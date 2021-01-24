const Area = require('../models/area');
//const User = require('../models/user');

module.exports = {
    createAreas, 
    getAreas,
    getPlayersAreas

}


//unction to get areas that have previosly been submitted by the player from MongoDB
async function getAreas(req, res) {
    try {
        //const username = await Area.find({ username: req.query.username });
        const markers = await Area.find({})
       // console.log(username)
        res.json(markers)
    } catch(err){
        res.json({ err });
    }

}

async function getPlayersAreas(req, res) { //gets ont the players markers need to call similarly to getArea
    try {
       // const markers = await Area.find({})
        const username = await Area.find({ username: req.query.username });//get username from Area schema
        console.log(username) //only getting the logged in users data 
        res.json(username); //get data by username 
    } catch(err){
        res.json({ err });
    }

}



//save the areas that have been created by the player (coordinates have been saved inside )

async function createAreas(req, res) {
    try {
        await Area.create(req.body);
      
        getAreas(req, res);
        getPlayersAreas(req, res); 
        //might need to call getPlayersAreas? 
    } catch (err) {
        res.json({ err });
    }
}

