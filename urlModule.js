const url = require("url");
const http = require("http");

const server = http.createServer((req, res) => {
  const address_url = "http://localhost:5000/product?name=mobile&brand=mi";
  const parsed_url = url.parse(address_url, true);
  const queryObject = parsed_url.query.name;
  console.log(queryObject);
  res.end("!@")
});
console.log(url);
const PORT = 5000;

server.listen(PORT, () => {
  console.log("Running");
});
