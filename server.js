const express  = require ("express");
require("dotenv").config();
const connectDB = require("../backend/config/dbConnect.js")
//*********Define connect db before any route defined. */
connectDB();
const cors = require("cors");
const app = express(); 
const port = process.env.PORT || 3000; 

app.use(express.json()); 
app.use(cors()); 


app.listen(port, ()=>{
    console.log(`Server started on ${port}`) 
});
