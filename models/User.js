//jshint esversion:6

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
    name: String,
    email: {type: String, required: true, lowercase: true, unique: true},
    password: String,
    organization: String,
    subOrganization: String,
    registeredVoter: Boolean
}, {
    timestamps: true
});

//removes the password when serializing doc to JSON 
userSchema.set('toJSON', {
    transform: function(doc, ret) {
        delete ret.password;
        return ret;
    }
});

module.exports = mongoose.model('User', userSchema);

