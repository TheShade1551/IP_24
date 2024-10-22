//Database Connection
const con_str = "mongodb+srv://Sagar:test@ip.otsum.mongodb.net/?retryWrites=true&w=majority&appName=IP"

const { error }  = require("console");
const mongoose = require("mongoose");

var express = require("express");
var app = express();
app.use(express.json())

mongoose
	.connect(con_str, {})
	.then(() => {
		console.log("Mongodb connected");
	})
	.catch((error) => {
		console.log(error);
	});

const empSchema = new mongoose.Schema({
	name:String,
	age:Number,
	profession: String,
	gender: String
})
const emp = new mongoose.model("test", empSchema)

app.get("/employees", async (req, res)=>{
	let data = await emp.find({"salary": 50000})
	res.send(data)
})

app.listen(6969, () => {
	console.log("server started at 6969 port");
});