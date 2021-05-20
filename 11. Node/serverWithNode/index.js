const http = require("http");
const fs = require("fs");
const port = 5000;
const host = "127.0.0.1";

// for creating server and read html file
const server = http.createServer((req, res) => {
  if (req.url == "/" && req.method == "GET") {
    fs.readFile("index.html", (err, data) => {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.write("ERROR: FIle not found");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
      }
      res.end();
    });
  }
});

// for server listening on port 5000
server.listen(port, host, (err) => {
  if (err) {
    console.log("Something went wrong ", err);
  } else {
    console.log("Server is successfully listening on port " + port);
  }
});
