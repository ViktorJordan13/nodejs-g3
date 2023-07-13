const fs = require("fs");

function readFile(filename){
    fs.readFile(filename, 'utf-8', (err, data) =>{
        if(err){
            console.log("An error occured while reading the file:", err);
        }else{
            console.log("File contentes", data);
        }
    });
}

module.exports = {
    readFile,
}