const express  = require ("express"); //1. importing es module

const app = express(); //2. initialising the express application

const port = 3000; //3. defining the port number for the server to listen on.

app.listen(port, ()=>{
    console.log(`Server started on ${port}`) //4. starting the server and listen
});
