const mongoose = require('mongoose');

const Schema = mongoose.Schema; 

const voterSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    subOrganization: {
        type: String,
        required: true
    },
    registeredVoter: {
        type: Boolean,
        required: true
    },
}, {
    timestamps: true,
});


module.exports = mongoose.model('Voter', voterSchema);