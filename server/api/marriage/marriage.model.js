'use strict';

var User = require('../user/user.model');

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var Partner = {
    name: String,
    age: Number,
    user: {'type': mongoose.Schema.Types.ObjectId, 'ref': User}
}

var MarriageSchema = new Schema({
    bride: Partner,
    groom: Partner,
    domain: {type: String, required: true, lowercase: true},        // ex: www.meucasorio.com/{domain}
    when: Date,
    where: String,
    city: String
});

module.exports = mongoose.model('Marriage', MarriageSchema);