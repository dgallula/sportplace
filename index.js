const express = require('express');
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/sportCenters",{

});



const app = express();

const userRoute= require('./routes/user');

userRoute(app);

app.use(express.json());

app.listen(3000, ()=> {
    console.log('server successfully launched')
});

// not supported ? {
//     useNewUrlParser: true,
//     useUnifiedTopology:true,
//     useCreateIndex: true,
// }