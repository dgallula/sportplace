const express = require('express');

const app = express();

const userRoute= require('./routes/user');

userRoute(app);

app.use(express.json());

app.listen(3000, ()=> {
    console.log('server successfully launched')
});

