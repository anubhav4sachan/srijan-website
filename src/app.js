const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');


const app = express() 


app.set('view engine','ejs');
const publicDirectoryPath = path.join(__dirname,'../public')

const port = process.env.PORT || 3000

app.use(express.static(publicDirectoryPath))


app.post('/contact', function(req,res){
    console.log(req.body)
    res.render('profile',{
        data:req.body
    })
})

app.listen(port, () => {
    console.log('Server is up on port : '+ port)
})