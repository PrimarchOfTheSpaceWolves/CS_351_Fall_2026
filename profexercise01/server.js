const http = require("http");

const server = http.createServer((req,res) => {
    console.log("** HTTP REQUEST ********************");
    console.log(`${req.method} ${req.url} HTTP/${req.httpVersion}`);
    console.log("Headers:", req.headers);
    
});

server.listen(3000, () => {
    console.log("Server started at localhost:3000...");
});
