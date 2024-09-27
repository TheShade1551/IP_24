require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.port || 5000
// const connectDb = require("./db/connect")

app.get("/", (req, res) => {
    res.send("Hi i am live!");
})

// app.use("/api, routes");

const start = async () => {
    try {
        //await  connectDb(process.env.db_url);
        app.listen(port, () => {
            console.log(`server is running on ${port}`)
        })
    }
    catch (error) {
        console.log(error)
    }
}

start()