const mongoose = require('mongoose');

const Schema = mongoose.Schema; 

const voterSchema = new Schema({
    name: String,
    suborganization: String,
    registeredVoter: String 
});


module.exports = mongoose.model('Voter', voterSchema);