const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Register',{
    useNewUrlParser:true,
    useUnifiedTopology:true
});

const router = require('./routers/router')

const app = express() 
app.use(express.json())

app.use(bodyParser.urlencoded({
    extended:true
}))
app.use(bodyParser.json())

app.set('view engine','hbs');

const publicDirectoryPath = path.join(__dirname,'../public')
app.use(express.static(publicDirectoryPath))

app.set('views',path.join(__dirname,'../views'));
app.engine('hbs',exphbs({
    extname: 'hbs',
    defaultLayout: 'mainLayout.hbs',
    layoutsDir: __dirname + '../../views/layout/'
}));
 
const port = process.env.PORT || 3000

app.use('/register',router)



app.listen(port, () => {
    console.log('Server is up on port : '+ port)
})