//jshint esversion:6

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    organization: String,
    subOrganization: String,
    registeredVoter: Boolean, 
});

const suborganizationSchema = new Schema({
    name: String,
    users: [userSchema],
});


const organizationSchema = new Schema({
    name: String, 
    subOrganizations: [suborganizationSchema],
});


module.exports = {
    mongoose.model('User', userSchema, 'Organization', organizationSchema, 'SubOrganization', suborganizationSchema),
};