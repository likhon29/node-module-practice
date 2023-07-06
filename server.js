const http = require("http");
const { stringify } = require("querystring");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.writeHead(200, { "Content-type": "text/html" });
    res.write("<p>This is a Home page</p>");
    res.end();
  } else {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify({ course: "acc" }));
    res.end();
  }
});

const port = 5000;

server.listen(port, () => {
  console.log(`Server listenning on ${port}`);
});
