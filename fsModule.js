const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    // syncro
    // const data = fs.readFileSync("data.txt");
    // res.write(data);
    // res.end();

    // --->asyncro

    fs.readFile("data.txt", (err, data) => {
      if (err) {
        res.write("Fail to fetch");
        res.end();
      } else {
        res.write(data);
        res.end();
      }
    });

    // write data on file system

    //     fs.writeFile("data.txt", "Hello I am Md Abdur Rouf", (err) => {
    //       if (err) {
    //         res.write("Failed");
    //       } else {
    //         res.write("success");
    //       }
    //     });

    // write data on new file system

        fs.writeFile("newFile.txt", "Hello I am Md Abdur Rouf", (err) => {
          if (err) {
            res.write("Failed");
          } else {
            res.write("success");
          }
        });
  }
});

const PORT = 5000;

server.listen(PORT, () => {
  console.log("connected");
});
