const ex = require('express');
const path = require('path');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

//config...
const app = ex();
app.use(cors({
    origin:'http://localhost:4200'
}))
app.use(ex.json());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(session({
    secret:process.env.SESSIONSECRET
}));

//server running...
app.listen(process.env.PORT,()=>{
    mongoose.connect('mongodb://localhost:27017/ecom-database').then((res)=>{
        console.log("DB connected !");
        console.log(`http://localhost:${process.env.PORT}`);
    })
    .catch(err=>console.log("DB connection error : "+err))
});


//routing...
var mainRoute = require('./routes/mainRoute');
app.use('/',mainRoute);