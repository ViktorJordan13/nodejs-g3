//Promises have 3 states
//fulfilled(success), pending, rejectd(faillure)

//resolve(data) - data is an argument fron the readFile(function)
//reject(error) - error is an argument from the readFile on fail

//resolve and reject are callback argumenti

const fs = require("fs");
//const { resolve } = require("path");

const read = async() => {
    //resolve is a function!
    //reject is a function!
    return new Promise((resolve, reject) => {
        fs.readFile("data.json", "utf-8", (err, data) => {
            if(err){
                return reject(err);
            }else{
                data = JSON.parse(data); //ni treba za parsiranje (konverzija) na json podatocite
                return resolve(data);
            }
        });
    });
}

const write = async(data) => {
    return new Promise ((resolve, reject) => {
        data = JSON.stringify(data);
        fs.writeFile("data.json", data, (err) => {
            if(err){
                return reject(err);
            }else{
                return resolve();
            }
        });
    });
}

module.exports = {
    read,
    write
}