const express = require('express');
const { sendFile } = require('express/lib/response');
const https = require('https');
// import https from "https";

const app = express();

app.get(
    '/',
    (req, res)=>{
        https.get("https://api.kanye.rest", 
        (response)=>{
            
        
            const quote = response.quote;
            
            
            res.sendFile(__dirname + "/index.html");
        })


    }
);
app.listen(3000, ()=>{
    console.log("listening on port 3000:");
});