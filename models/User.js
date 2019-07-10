//jshint esversion:6

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    organization: String,
    subOrganization: String,
    registeredVoter: Boolean, 
});

module.exports = mongoose.model('User', userSchema);

