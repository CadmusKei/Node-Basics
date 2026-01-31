const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.socket.remoteAddress, "req");
  res.writeHead(404, { "Content-Type": "text/plain" });
  res.end("Hello World!");
});

const port = 3000;

server.listen(port, () => {
  console.log(`Server is now listening to port ${port}`);
});
