var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const UserSchema = new Schema({
    userName : String,
    emailAddress : { 
        type: String, 
        required: true, 
        unique: true 
    },
    accountNumber : { 
        type: Number, 
        required: true, 
        unique: true 
    },
    identityNumber : { 
        type: Number, 
        required: true, 
        unique: true 
    },
    
});

module.exports = mongoose.model('Users', UserSchema);