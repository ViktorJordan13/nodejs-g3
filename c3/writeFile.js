const fs = require("fs");

function writeFile(filename, data){
    fs.writeFile(filename, data, (err) =>{
        if(err){
            console.log("An error occured while writing the file:", err);
        }else{
            console.log("File succesfully written");
        }
    });
}

module.exports = {
   writeFile,
}