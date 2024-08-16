const http = require("http")

const myserver = http.createServer((req, res) => {
    console.log("Hello from Server")
    res.end("Hi There!")
})

myserver.listen(8000, () => {
    console.log("Server started at port 8000")
})