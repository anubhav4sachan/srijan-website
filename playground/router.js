const express = require('express');
const router = express.Router();


router.post('/', (req,res)=>{
    console.log(req.body)
    res.redirect('register/event')
})

router.get('/event',(req,res)=>{
    res.send('fdwe');
})

module.exports = router;