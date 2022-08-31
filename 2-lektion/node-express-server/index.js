const http = require("http"); // es5 syntax
const fs = require("fs");

const hostname = "127.0.0.1";
const port = 3000;
const filePath = "./index.html";

// 1.
const requestListener = (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World");
};

// 2.
// const requestListener = function (req, res) {
//   res.writeHead(200, { "content-type": "text/html" });
//   fs.createReadStream(filePath).pipe(res);
// };

const server = http.createServer(requestListener);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
 
