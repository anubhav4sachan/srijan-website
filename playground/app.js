// const path = require('path');
// const express = require('express');
// const bodyParser = require('body-parser');


// const router = require('./routers/router')

// const app = express() 
// app.use(express.json())

// app.use(bodyParser.urlencoded({
//     extended:true
// }))
// app.use(bodyParser.json())

// app.set('view engine','ejs');
// const publicDirectoryPath = path.join(__dirname,'../public')

// const port = process.env.PORT || 3000

// app.use(express.static(publicDirectoryPath))

// app.use('/register',router)



// app.listen(port, () => {
//     console.log('Server is up on port : '+ port)
// })

const ObjectID = require('mongoose').Types.ObjectID;
var myObjectId = ObjectId.fromString('5da2f69ff81c9625f88d24b3')
const y=myObjectId.getTimestamp();
console.log(y);