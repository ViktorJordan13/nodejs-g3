//Homework 
//1. Local module for file write and read
//2. Use append to append data and then read the new data appended
//3. Read the new data when change has been made
//Bonus
// async/await should be wrapped in try/catch 

const http = require("http");
const url = require("url");

const server = http.createServer((req, res) =>{
    res.writeHead(200, {"Content-type": "text/html" });
    const q = url.parse(req.url, true).query ;
    const txt = q.year + " " + q.month + " " + q.quarter;
    res.end(txt);
})

//server.listen(8080);

//Regular expressions 

const regex = /is/g; //RegExp, toa e vgraden objekt vo JavaScript
const text = "This is a sample text."
const result = regex.test(text);
console.log(result);

//  ., ?, !... - odgovara na  poedinecen znak 
//  \d - odgovara na bilo koja znak sto e brojka
// \w - odgovara na bilo koj alfanumericen znak
// + - odgovara na ednaska ili poveke pati povtoren predhoden izraz
// * - odgovara na nula ili poveke pati povtoren predhoden izraz
// ? - oznacuva deka predhodniot izraz moze da bide prisuten ili otsuten
// [] - definira mnozestvo znakovi koe odgovara na eden od znakovite vo mnozestvoto
// () - grupira del od regularnot izraz

//someone@yahoo.com

//Aplikacijata obicno se organizira na:
    //1. glaven/indrastrukturen (server) del - konfiguracija i startuvanje na server, port, menadziranje http/https requests
    //2. sporeden/aplikaciski (handler) del - implentacija na razlicni routes, functions, handlers koi ja obrabotuvaat logikata i baranjata na klientite