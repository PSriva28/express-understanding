const http = require("http")

const fs = require("fs") // fs file system module jai jo iss folder mai html css js images ko read krne mai help karega

//Note : that the html and the css file and the external files

const server = http.createServer((req,res) =>{   
    if(req.url === "/") {
        // console.log(req.url)
        //1- reading html file
        res.writeHead(200, {'content-type' : "text/html"}) 
        const readHtml = fs.readFileSync('./node.html')
        res.write(readHtml);
        res.end();
    }
    //2- usecase for reading image
    else if(req.url === "/bp.jpg"){
        res.writeHead(200, {'content-type' : "img/jpg"}) 
        const readImg = fs.readFileSync('./bp.jpg')
        res.write(readImg);
        res.end();
    }
    //3- is for reading css file.
    else if(req.url === "/node.css"){
        res.writeHead(200, {'content-type' : "text/css"}) 
        const readCSS = fs.readFileSync('./node.css')
        res.write(readCSS);
        res.end();
    }
    else{
        res.writeHead(404, {'content-type' : "text/html"});
        res.write('<h4>Sorry the page you are looking for dont exist</h4>')
        res.end()
    }

    
})

//2- need to have a port to listen
server.listen(3001)