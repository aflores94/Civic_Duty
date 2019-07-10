//jshint esversion:6

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const suborganizationSchema = new Schema({
    name: String,
    users: [userSchema],
});

module.exports = mongoose.model('SubOrganization', suborganizationSchema);