const mongoose = require('mongoose')

const workshopSchema = new mongoose.Schema({
    name: {
        type:String,
        trim:true,
        required:true
    },
    collegeName: {
        type: String,
        required:true
    },
    mailId:{
        type:String,
        required:true
    },
    mobileNumber:{
        type:Number,
        required:true
    }   
});

const Workshop = mongoose.model('workshop',workshopSchema);
module.exports = Workshop;