const express = require('express');
const router = express.Router();

const Event = require('../models/event');
const Workshop = require('../models/workshop');
const mongoose = require('mongoose');
var paytm_config = require('../paytm/paytm_config').paytm_config;

router.post('/event', (req,res)=>{
    const event = new Event(req.body);
    try {
        console.log(req.body);
        event.save((err,data)=>{
            console.log(data);
            if(!err){
                res.redirect('event/list?id=' + data._id)
            }else{
                res.redirect('error')
            }
        });    
    } catch (error) {
        console.log('error during insert operation : ' + error);
    }
})



router.get('/event/list',(req,res)=>{
    let id = req.query.id;
    Event.findOne({_id:id},(err,docs)=>{
        if(!err){
            const list = {
                ...docs._doc,
                ORDERID: 'ORDER'+Date.now(),
                CUSTID : 'CUST'+Date.now(),
                MID : paytm_config.MID,                   
            };
            console.log(docs);
            res.render("eventList",{  //its a view page 
                list
            })  
        }else{
            res.redirect('error')
        }
    })
})


router.post('/workshop',(req,res)=> {
    const workshop = new Workshop(req.body);
    try {
        console.log(req.body);
        workshop.save((err,data)=>{
            console.log("data : ",data);
            if(!err){
                res.redirect('workshop/list?id=' + data._id)
            }else{
                res.redirect('error')
            }
        })
    } catch (error) {
        console.log('error during insert operation : ' + error);
    }
})

router.get('/workshop/list',(req,res)=>{
    let id = req.query.id;
    Workshop.findOne({_id:id},(err,docs)=>{
        if(!err){
            const list = {
                ...docs._doc,
                ORDERID: 'ORDER'+Date.now(),
                CUSTID : 'CUST'+Date.now(),
                MID : paytm_config.MID,                  
            };
            console.log("docs : ",list);
            res.render("workshopList",{  //its a view page 
                list
            })  
        }
        else{
            res.redirect('error')
        }
    })
})

router.post('/checkWorkshop',(req,res)=> {
    console.log(req.body);
    res.render('paytm',{
        docs:req.body
    })
    
})

router.post('/checkEvent',(req,res)=> {
    console.log(req.body);
    res.render('paytm',{
        docs:req.body
    })
    
})

router.get('/getAllEvents/9123421208',(req,res)=>{
    Event.find((err, data)=>{
    res.send(data);
    });
});

router.get('/getAllWorkshops/9123421208',(req,res)=>{
    Workshop.find((err, data)=>{
        res.send(data);
    });
});

router.get('/error',(req,res)=>{
    res.render('error',{
        errorMsg:'Wrong Input Found'
    })
})


module.exports = router;