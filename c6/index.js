const http = require("http");
const url = require("url");
const fs = require("fs");

const server = http.createServer((request, response) =>{

    const url = request.url; //req["url"] go zema url-to
    const method = request.method; //imav samo request, mesto request.method, zatoa ne ni rabotese

    // console.log(url);
    if(url === "/"){ //HOME
        response.write("<html>");
        response.write("<head><title>Enter Message</title><head>");
        response.write(`<body><form action="/message" method="POST">
        <input type="text" name="message"></input>
        <button type="submit">Send</button></form></body></html>`);
        response.write("</html>");
        return response.end();
    }

    if(url === "/test"  && method === "GET"){
        console.log("Test");
        response.write("<html>");
        response.write("<head><title>TEST</title><head>");
        response.write("</html>");
        return response.end();
    };

    if(url === "/students"){
        response.end("Students");
    }

    if(url === "/message" && method === "GET"){
        response.end("Sega e jasno!")
    }

    if(url === "/message" && method === "POST"){
        
        const body = [];

        request.on("data", (chunk) => {  //"data" ni e event name, chunk ni e callback

            body.push(chunk); //this is in bytes
            //console.log(body)
        });

        request.on("end", () => {

            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split("=")[1];

            fs.writeFileSync("message.txt", message);

            console.log(parsedBody);

        });
    }
    response.statusCode = 302;
    response.setHeader("Location", "/");
    return response.end();
});

//server.listen(8080);

//Task
// Write your name, surname and year of birth in the response, each of them should be on a different route
// Display it on the server
// OPTIONAL: set headers for each of them

// localhost:xxxx/sobiranje/2/2

const handler = (req, res) =>{
    const url = req.url;
    // console.log(url);

    // res.end("OK");

    const [_, operacija, num1, num2] = req.url.split("/");

    const numTest = "1";
    Number(numTest); //converts string to number

    const stringeTest = 1;
    stringeTest.toString(); //converts number to string

    let result;

    switch (operacija){

        case "sobiranje":
            result = Number(num1) + Number(num2);
            res.end(`${result}`);
            break;
        case "odzemanje":
            result = Number(num1) - Number(num2);
            res.end(`${result}`);
            break;
        case "mnozenje":
            result = Number(num1) * Number(num2);
            res.end(`${result}`);
            break;
        case "delenje":
            result = Number(num1) / Number(num2);
            res.end(`${result}`);
            break;
        default:
            res.end("OK");
    }
}

const newServer = http.createServer(handler);

//newServer.listen(8080);

//Homework
//1. kreirajte server
//2. na ruta home/imePrezimePol -> res.end(<imetoPrezimetoPolot>) first letter of each should be capital
//3. na ruta home/title -> res.end(Title) dodadete Title na rutata
//4. na ruta home/header -> dodatete header so vrenost "Ova e Header!"
//OPTIONAL na handler funkcijata za kalkulator dodadete modul(%), kvadrat(n^2) i kub (n^3)



//Middleware - set of functions or code snippets that are executed in a sequental manner during the processing 
//of an HTTP request or response

//MVC (Model, View, Controller) - it is a design pattern commonly used in software development, it is used
// to separate different functionalities and responsibilities within an application

//Model - the model represents the data (students, cars etc) and the bussiness logic of the application (in our case simple CRUD functinalities)
//Controller - The controller acts as an intermidiary(bridge) between the model and the view (programerskata logikata)
//View - the view is responsile for presenting the data to the user (html kodot)



//Express module
//Installation: npm install express

const express = require("express");

const app = express();

//Methods: GET, POST, PUT, PATCH, DELETE

//Middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: false})); //POST, PUT
//In the above example, express.urlencoded({ extended: false}) is added as a middleware app.use().
//The extended option determines wheter to use the querystring library (false) or use the qs library(ture) for parsing the URL-encoded data.
//Once this middleware is added, we can access the parsed form in the req.body object within your route handler
//The req.body object will contain key-value pairs corresponding to the form fields.

//If your express version is higher than 4.16, instead of using express.urlencoded middleware,
//you can install and use the body-parser middleware to achieve the same functionality

app.get("/", (req, res) => {
    res.send("Hello World!");
});
// Route handler for POST request
app.get("/form", (req, res) => {
    // Access the form data from req.body
    console.log(req.body);
    res.send('Form submitted succesfully!');
});

//Start the server
app.listen(3000, (err) => {
    if (err) console.log("Greska:", err);
    console.log('Server listening on port 3000!');
});