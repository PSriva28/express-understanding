const express  = require ("express"); 
const cors = require("cors");
const morgan = require("morgan");
const app = express(); 
const port = 3000; 

// * Built in middlewares - at the top of the middleware
// ------------------------------------------------------
app.use(express.json()); // this parses body into json format/ if not used it will throw undefined in the body
app.use(express.urlencoded({extended : true})); // For parsing application/x-www-form-urlencoded
app.use(express.static('public')) // Serve static files from "public" folder

// ---------------------------------------------------------
// * Third - party middlewares like cors and morgan
// ---------------------------------------------------------
app.use(cors()); //Cross Origin resource sharing, enables data from one resourse to get shared to third party resources
app.use(morgan('dev')) //


// ---------------------------------------------------------
// * Custom middlewares
// ---------------------------------------------------------
const custom = ((req,res,next) =>{
    console.log(`[CustomLogger] ${req.method} ${req.url}`);
    next();
})
app.use(custom);


// ---------------------------------------------------------
// * Application level middlewares
// ---------------------------------------------------------
app.use((req,res,next)=>{
    console.log("Application level middleware");
    next()
});

// ---------------------------------------------------------
// * Routing middlewares
// ---------------------------------------------------------
const router = express.Router();

router.use((req,res,next)=>{
    console.log("Router level")
})

router.route("/get").get((req,res) =>{
    res.status(200).json({message : "Router 1"})
});

app.use("/users", router);

// ---------------------------------------------------------
// * Error middlewares technically at the bottom to caught the errors
// --------------------------------------------------------
app.get('/error', (req, res, next) => {
  next(new Error('Something went wrong!'));
});
app.use((err, req, res, next) => {
  console.error('Error Middleware:', err.message);
  res.status(500).json({ error: err.message });
});


app.listen(port, ()=>{
    console.log(`Server started on ${port}`) 
});
