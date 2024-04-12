const express = require('express');
const app = express();
const config = require('dotenv').config();
const PORT = process.env.PORT;
const jsonData = require('./jsonData');

function middleWare(req, res, next){
   console.log("Middleware Started....");
   next();
}

app.get('/',(req, res)=>{
    res.send("Welcome to my NodeServer");
})

app.get('/home',(req, res)=>{
    res.send("<center>Welcome to my HOME PAGE</center>")
})

app.get('/api/data',(req, res)=>{
    res.json(jsonData)
})


app.listen(PORT, (error)=>{
    if(error){
        console.log("Error occured...", error)
    }
    console.log(`Server started at ${PORT}`);
})

