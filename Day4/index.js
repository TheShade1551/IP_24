const fs = require("fs")

// fs.writeFileSync("./a.txt","Hello World Sagar ascii")

// console.log("Hello World")

// const data = fs.readFileSync('./a.txt', 'ascii')
// console.log(data)

//write file async
// console.log("Before file writing")
// fs. writeFile('./b.txt',"This is Async", (err) => {});
// console.log("Hello Boi")

//read file
fs.readFile("./b.txt","utf-8", (data, error) => {
    if(error){
        console.log(error)
    }else{
        console.log(data)
    }
})