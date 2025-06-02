const http = require("http")

const server = http.createServer((req,res) =>{    //1- creating server using http module. which takes one callback having two arguments : req,res
    // console.log(req) // see the request body in console, 
    //************When went to brower it will not open any page as we haven't send any reponse */
    console.log("No response",res)
//http message :- startline,header, and the body. we don't need to write startline
//3- creating response 
    res.writeHead(200, {'content-type' : "text/html"}) //1- writeHead takes two agrs one is the statuscode and the other is k-v pair
    res.write('<h1>Hello world!</h1>') //2- the html text
    res.end() // 3- to stop the connections
})

//2- need to have a port to listen
server.listen(3001)