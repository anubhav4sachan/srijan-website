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
        required:true,
    },
    mobileNumber:{
        type:Number,
        required:true
    },
    transactionID:{
        type: String,
        default: null
    }  
});

workshopSchema.statics.updateTransactionId=function(mailId,transactionID){
    if(transactionID){
        return Workshop.findOne({mailId}, (err, workshop)=>{
            console.log('MAIL ID', workshop);
            if(!err){
                workshop.transactionID=transactionID;
                workshop.save((err, data)=>{
                    if(!err){
                        return true;
                    }
                    return false;
                })
            }
        })
    }
};

const Workshop = mongoose.model('workshop',workshopSchema);
module.exports = Workshop;