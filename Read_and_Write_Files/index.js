const fs = require('fs');

//fs.readFile('./Read_and_Write_FIles/files/starter.txt',(err,data))
        // if(err) throw err;
        // console.log("File Contents: " + data.toString());

        //or
fs.readFile('./Read_and_Write_FIles/starter.txt','utf8',(err,data) =>{
        if(err) throw err;
        console.log("File Contents: " + data.toString());
})

console.log('Hello...');

//exit on uncaught errors
process.on('uncaughtException', err => {
    console.error('There was an uncaught error: ${err}');
    process.exit(1);
})