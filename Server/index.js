const http = require("http");
const fs = require("fs");
// It takes a callback function which is responsible for processing the incoming request.
const myServer = http.createServer((req, res) => {
  //   console.log(req); // Jo req aa rhi hai vo kis tarah ki request hai kaha sae aa rhi hai (Object)
  //   console.log("New Req Recieved."); // We can send resonse from here
  //   res.end("Hello From Server");
  const log = `${Date.now()}: ${req.url} New Req Recieved\n`;
  fs.appendFile("log.txt", log, (err, data) => {
    switch (req.url) {
      case "/":
        res.end("Welcome to Home Page !!");
        break;
      case "/contact":
        res.end("Hello Amit !!");
        break;
      case "/extra":
        res.end("Gamer !!");
        break;
      default:
        res.end("404 noy found !!");
    }
    res.end("Log Has Been recorded !!");
  });
}); // creates the server(web)

myServer.listen(8000, () => {
  console.log("Server Started !!");
});

// Jab bhi merae server par koi request aayegi mai log kr doonga apni log.txt file mae ki haa yae request aayi hai .
