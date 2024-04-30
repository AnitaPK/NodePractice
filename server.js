const fs = require('fs');




fs.writeFile('textfile.txt', "This is line one in textfile.", ()=>{
        console.log('fileCreated succecssfully...');
})

fs.appendFile('textfile.txt', "\nThis is line two in textfile.", ()=>{
    console.log('file append.')
})

fs.readFile('textfile.txt','utf8',(err,data)=>{
    console.log(data);
});