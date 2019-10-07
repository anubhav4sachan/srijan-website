const express = require('express');
const router = express.Router();
const Event = require('../models/event');
const mongoose = require('mongoose');

router.post('/', (req,res)=>{
    const event = new Event();
    try {
        event.teamName = req.body.teamName;
        event.collegeName = req.body.collegeName;
        event.mailId = req.body.mailId;
        event.mobileNumber = req.body.mobileNumber;
        event.teamMembersName = req.body.teamMembersName;
        event.events = req.body.events;
        event.transport = req.body.transport;
        event.arrivalDate = req.body.arrivalDate;
        event.departureDate = req.body.departureDate;
        event.transportDetails = req.body.transportDetails;
        event.save((err,data)=>{
            console.log(data);
            if(!err){
                res.redirect('event/list?id=' + data._id)
            }else{
                res.redirect('event/error')
            }
        });    
    } catch (error) {
        console.log('error during insert operation : ' + error);
    }
})

router.get('/list',(req,res)=>{
    let id = req.query.id;
    Event.findOne({_id:id},(err,docs)=>{
        if(!err){
            console.log(docs);
            res.render("event/list",{   
                list:docs
            })  //this is rendering the views while redirect lets us to a new url
        }
    })
})

module.exports = router;