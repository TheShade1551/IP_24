const os = require('node:os');
console.log("Welcome to IP!")
console.log(os.hostname())
console.log(os.version())
console.log(os.cpus())

var fs = require('fs');

fs.open('text.txt','w', function (err, file){
    if (err) throw err;
    console.log('Saved!')
});

fs.writeFile('text1.txt','Namaskar!', function (err){
    if (err) throw err;
    console.log('Saved!')
});


