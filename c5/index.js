//Task
//testirajte gi funkciite:
// getAllStudents,
// getSingleStudent,
// addNewStudent,
// deleteStudent,
// editStudent

//vo ovoj fajl index.js iskoristete gi site,
//prvo povikajte go getAllStudents,
//potoa povikajte getSingleStudent
//dodajte 3 novi studenti so addNewStudent
//
//izbrisete 2 od niv
//
//preostanatiot editirajte go
//
//HINT: posle sekoj od cekorite pak ispisete getAllStudents

const http = require("http");
const url = require("url");
const fs = require("fs");

const server = http.createServer((request, response) =>{
    const url = request.url; //req["url"] go zema url-to
    const method = request.method; //imav samo request, mesto request.method

    console.log(url);
    if(url === "/"){ //HOME
        response.write("<html>");
        response.write("<head><title>Enter Message</title><head>");
        response.write(`<body><form action="/message" method="POST">
        <input type="text" name="message"></input>
        <button type="submit">Send</button></form></body></html>`);
        response.write("</html>");
        return response.end();
    }

    // if(url === "/test"){
    //     console.log("Test");
    // };

    if(url === "/message" && method === "POST"){

        const body = [];
    
        request.on("data", (chunk) => {
            body.push(chunk);
            console.log(body);
        });

        request.on("end", () => {

            const parsedBody = Buffer.concat(body).toString();
            //message=Viktor
            const message = parsedBody.split("=")[1];

            fs.writeFileSync("data.txt", parsedBody);

            console.log(message);
        });
    }
    // response.statusCode = 302;
    // response.setHeader("Location", "/");
    return response.end();

});

server.listen(8080);

//Homework
//1. CRUD module for cars
//2. Add new car -> data.json
//3. Get all cars and get single car by id -> getSingleCarById(505)
//4. Remove car by id
//5. Update car by id
//OPTIONAL: Try to use parameters instead of hardcoded strings