// core module
const http = require("http");
const server = http.createServer((req, res) => {
  res.end("Server is running");
});

server.listen(5000, () => {
  console.log("running");
});
