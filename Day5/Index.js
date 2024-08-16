const express = require('express')
const app = express()
const port = 3500

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/signup', (req, res) => {
    res.send('Damn You Have Signed up!')
})

app.get('/signout', (req, res) => {
    res.send('Damn You Signed Out!')
})

app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`)
})