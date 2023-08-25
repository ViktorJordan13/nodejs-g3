// Homework
const studenti = [
    { ime: "Bojan", prosek: 7.5, grad: "Skopje" },
    { ime: "Pero", prosek: 8.3, grad: "Bitola" },
    { ime: "Janko", prosek: 6.9, grad: "Bitola" },
    { ime: "Vesna", prosek: 9.2, grad: "Skopje" },
    { ime: "Elena", prosek: 9.9, grad: "Kumanovo" },
    { ime: "Vancho", prosek: 10, grad: "Tetovo" },
    { ime: "Elena", prosek: 9.9, grad: "Ohrid" },
    { ime: "Ivana", prosek: 6.9, grad: "Kumanovo" },
    { ime: "Natasha", prosek: 8.1, grad: "Skopje" },
    { ime: "Stanko", prosek: 7.2, grad: "Strumica" },
  ];

  //Task 1
  const filtriraniStudenti1 = studenti.filter(
    student =>
        student.grad === "Skopje" &&
        student.ime.toLowerCase().endsWith("a") &&
        student.prosek > 7
  );

  filtriraniStudenti1.sort((a, b) => a.ime.localeCompare(b.ime));
  //console.log("Resenie na prviot task: ", filtriraniStudenti1);

  //Task 2

  const filtriraniStudenti2 = studenti.filter(
    student =>
        student.prosek > 9 && student.grad !== "Skopje"
  );

  filtriraniStudenti2.sort((a, b) => b.prosek - a.prosek);
  //console.log("Resenie na vtoriot task: ", filtriraniStudenti2);

  const fs = require("fs");

const fileWrite = (filename, data) => {
    return new Promise((success, fail) => {
        fs.writeFile(filename, data, (err) => {
            if(err){
                return fail(err);
            }else{
                return success();
            }     
        })
    });
}

//Promise can be done with then/catch i finally

//then -> when the result of the Promise is successful
//catch -> when the result of the Promise has failed
//finally -> will always be executed

    // fileWrite("test.txt", "this is a test")
    //     .then(() => {
    //         console.log("File written succesfully");
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //     })
    //     .finally(() => {
    //         //this will always be executed
    //         console.log("this will always be executed");
    //     });

//ES 7 async/await with try/catch 

//IIFE - Immediately invoked function expression

// (async () => {
//     await fileWrite("test1.txt", "this is a test 1");
//     await fileWrite("test2.txt", "this is a test 2");
//     await fileWrite("test3.txt", "this is a test 3");
//     await fileWrite("test4.txt", "this is a test 4");
// })();

const main = async () => {
    await fileWrite("test1.txt", "this is a test 1");
    await fileWrite("test2.txt", "this is a test 2");
    await fileWrite("test3.txt", "this is a test 3");
    await fileWrite("test4.txt", "this is a test 4");
};

//main();

//Sto ke se izvrsi prvo
// console.log("first")

// const fileContents = fs.readFileSync("test.txt", "utf-8");
// console.log(fileContents);

// console.log("Second");

// fs.readFile("test1.txt", "utf-8", (error, data) => {
//     //async call
//     if(error){
//         console.log(error);
//     }else{
//         console.log(data);
//     }
// });

// console.log("Third");

//Task
//1. Make a file with your: fullname, age, profesion
//2. Read that file and display the contents
//Bonus:
//write and read should be in local modules and imported

const writeFileModule = require('./writeFile');
const readFileModule = require('./readFile');

const filename = 'personal.txt';
const data = 'Full Name: Viktor Jordanoski\nAge: 29\nProfession: Software Engineer';

// writeFileModule.writeFile(filename, data);
// readFileModule.readFile(filename);

//Homework
//1. writeFile with fs => core module
//2. make a hello world function and require it => local module
//3. find some package on npmjs.com and require => third module

//http
//daj mi gi podatocite (request) - eve ti gi podatocite (response)

//CRUD (CREATE, READ, UPDATE, DELETE)

//Client-server arhitecture
//Http request methods
//1. GET -> no body, has path for requesting data from server -> READ EXISTING DATA
//2. POST -> has body -> CREATE NEW ENTRY
//3. PUT -> has body -> UPDATE EXISTING ENTRY
//4. PATCH -> has body -> UPDATE EXISTING ENTRY PARTIALLY
//5. DELETE -> optional body -> DELETE AN ENTRY

//example of body
  const account = {
    name: "Viktor",
    surname: "Jordanoski",
    age: 28
  }

//Http response types
// 100 - Information
// 200 - Success
// 300 - Redirect
// 400 - Client error messages
// 500 - Server error messages

const http = require("http");

// const server = http.createServer((req, res) => {
//     res.write("Test");
//     res.end();
// });

// server.listen(8080);

const url = require("url");

// const server = http.createServer((req, res) => {
//     const url = req.url;;
//     const method = req.method; //GET, POST, PUT, PATCH, DELETE

//     if(url === "/"){ //Home endpoint
//         res.write("Home");
//         res.end();
//     }
//     if(url === "/student"){
//         res.write("Studenti");
//         res.end();
//     }
// });

// server.listen(8080);

// const server = http.createServer((req, res) =>{
//     res.writeHead(200, {"Content-type": "text/html" });
//     const q = url.parse(req.url, true).query ;
//     const txt = q.year + " " + q.month + " " + q.quarter;
//     res.end(txt);
// })

// server.listen(8080);

const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-type": "text/html" });
    res.end("<h1>This is the last exercise for todays class</h1>")
});

server.listen(8080);
