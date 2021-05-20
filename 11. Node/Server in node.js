/*

    Client         <- Request            
    Server            Response ->

    To do this response and request a set of protocol is established

    Protocols: It is a set of communication rules,that two sides agree to use when communicating 
            like http/tcp

    Ports: A Program running on a computer can listen for requests sent to a particular port number
    eg: 172.0.0.1.3000

    https://www.hostinger.in/tutorials/what-is-localhost

*/
var http = require("http");

var server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/plain" });
  //http status: 200  , Type of content providing i.e html json etc

  //Ending response
  res.end("Hiiiii");
});

server.listen(3000, "127.0.0.1");
//127.0.0.1 : stands for localhost

console.log("Server is listening to PORT 3000");

/*
    Like this http module node js have its inbuilt 
    modules some most common modules are:

    inbuilt:
    http -> helps to create server
    os -> gives details of os
    fs -> helps to manage file system
        Creating and deleting files Reading and writing files

    Get open-source (npm) or external modules :
        - express

*/
