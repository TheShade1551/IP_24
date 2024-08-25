import express from "express"

const app = express();
const port = 3000;

app.use(express.json())

let items = [
    { id: 1, name: 'Item 1', description: 'This is item 1'},
    { id: 2, name: 'Item 2', description: 'This is item 2'},
];

app.get("/items", (req, res)=>{
    res.send(items)
})

app.get("/items/:id",(req, res)=> {
    const param = req.params.id;
    console.log(param);

    const item = items.find(i => i.id === parseInt(param));
    console.log(item)
    if (item) {
        res.send(item);
    } else {
        res.status(404).send({message: 'Item not found' });
    }
});

app.post('/items',(req,res)=>{
    const newItem = req.body;
    newItem.id = items.length+1
    items.push(newItem)
    res.sendStatus(201)
})

app.listen(port, () => {
    console.log("Hi from Server!")
})
