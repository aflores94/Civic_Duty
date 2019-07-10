//jshint esversion:6

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const organizationSchema = new Schema({
    name: String,
    subOrganizations: [suborganizationSchema],
});

module.exports = mongoose.model('Organization', organizationSchema);