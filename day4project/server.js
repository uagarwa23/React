let http = require("http")

let httpServer = http.createServer((request,response)=>{
  console.log("Request Header :",request.headers);
    //response.console.log("Response from response obj");

    //handle incoming requests
    if(request.url == "/"){
        response.writeHead(200,{"Content-Type":"text/html","test":"ttttttt"})
        response.write("<html><body><h2>Home Page</h2></body></html>")       
    }else if(request.url == "/admin"){
        response.writeHead(200,{"Content-Type":"text/html"})
        response.write("<html><body><h2>This is Admin Page</h2></body></html>")       
    }else if(request.url == "/data"){
        response.writeHead(200,{"Content-type":"application/json"})
        response.write(JSON.stringify({"msg":"JSON message"}))

    }else{
        response.writeHead(404,{"Content-Type":"text/html"})
        response.write("<html><body><h2>Page not Found</h2></body></html>")
    }


    response.end();
});

httpServer.listen(5000,"localhost",() =>{
    console.log("Server is running at 5000 port")

    
})


