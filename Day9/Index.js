var express = require("express");
var app = express();

app.listen(6969, () => {
  console.log("server started at 8989 port")
});

app.get("/employees", (req, res)=>{
  res.send("i am from a get method")
})

app.post("/employees", (req, res)=>{
  res.send("i am from a post method")
})

app.delete("/employees", (req, res)=>{
  res.send("i am from a delete method")
})

app.put("/employees", (req, res)=>{
  res.send("i am from a put method")
})