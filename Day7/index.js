// const express = require('express')  // Import Express
// const app = express()  // Create an Express App

// // Define the Route for the root URL of the Website
// // First Parameter is the URL
// // Second is the Callback Function which tells what to do when the user request this URL
// app.get('/', function(req, res){
//     console.log("Request Recieved")
//     res.send("Hello World!")
// })
// app.listen(3000)

const express = require('express')
const app = express()
const port = 3000

app.get('/',(req, res)=>{
    console.log("Hello dada!")
    res.send("Hello World!")
})
app.get('/about',(req, res)=>{
    res.send("About Works")
})