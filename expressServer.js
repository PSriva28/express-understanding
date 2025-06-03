const express = require("express");
const path = require('path');
const app = express();

app.use(express.static('public'));

app.all('*', (req,res) =>{
    res.sendFile(path.join(__dirname, 'node.html'));
})

app.listen(3002, ()=>{
    console.log("server running on port 3002")
})