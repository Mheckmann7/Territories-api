const Area = require('../models/area');


module.exports = {
    createAreas, 
    getAreas,
    getPlayersAreas,

}


async function getAreas(req, res) {
    try {
        const markers = await Area.find({})
        res.json(markers)
    } catch(err){
        res.json({ err });
    }

}

async function getPlayersAreas(req, res) { 
    try {
        const username = await Area.find({ username: req.query.username });
        res.json(username); 
    } catch(err){
        res.json({ err });
    }

}


async function createAreas(req, res) {
    try {
        await Area.create(req.body);
        getAreas(req, res);
        getPlayersAreas(req, res); 


    } catch (err) {
        res.json({ err });
    }
}


