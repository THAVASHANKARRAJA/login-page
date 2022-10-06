const express = require('express')
const app = express()
const path = require('path');
const session = require("express-session");
const{v4:uuidv4}= require("uuid");
const router = require('./router');



const port = process.env.PORT || 3000;



// use static assets
app.use('/static',express.static(path.join(__dirname,'public')))
app.use('/assets',express.static(path.join(__dirname,'public/assets')))
app.set('view engine','ejs');
const bodyparser = require("body-parser")
app.use(bodyparser.urlencoded({extended:true}))
app.use(session({secret:uuidv4(),
resave:false,
saveUninitialized:true,
}))
app.use('/route',router);




//home
app.get('/',(req,res)=>{
    res.render('base',{title:"Login system"});
})

app.listen(port,()=> {
    console.log("listening to the server on http://localhost:3000")
});