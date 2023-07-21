//Frontend(Kaj nas ke bide toa views)->
//->Router (kaj nas toa e vo index.js, nemame potreba za poseben router fajl) ->
//->Controller->
//->Model->
//->Database(Kaj nas toa e fajlot .json ili .txt)

const express = require("express");
const { getCalculator, postCalculator } = require("./controllers/calculator");

const app = express();

app.use(express.urlencoded({ extended: false}));

app.get("/", (req, res) => {
    res.send("Hello Semos Students");
});

app.get("/hello/:name", (req, res) => {
    //queryString starts from ?
    //req.params
    //req.query
  
    res.send(req.params);
  });

//router.get('/', brandController.getAllBrands);
app.get("/calculator/:op/:a/:b", (req, res) => {

    const {a, b, op} = req.params;

    let result;

    switch (op){

        case "sobiranje":
            result = Number(a) + Number(b);
            res.end(`${result}`);
            break;
        case "odzemanje":
            result = Number(a) - Number(b);
            res.end(`${result}`);
            break;
        case "mnozenje":
            result = Number(a) * Number(b);
            res.end(`${result}`);
            break;
        case "delenje":
            result = Number(a) / Number(b);
            res.end(`${result}`);
            break;
        default:
            res.end("OK");
    }
});

app.get("/calculator", getCalculator);
app.post("/calculator", postCalculator);

app.listen(8080, (err) => {
    if (err) console.log("Greska", err);
    console.log("Server listening on port 8080!");
})

//Task
//So express modulot:
//1. kreirajte nov server
//2. na home page ispisete "Hello SEMOS studens!"
//3. na /hello ispisete "Hello world"
//4. OPTIONAL na adresa "/hello/:name" ispisete na mestoto na (:name)
//vaseto ime i ispiseto go vo browserot

//Homework
//1. Home - display data for cars, books, cities
//2. Cars, books, cities - route with query (Hint req.query) display single car, book, city
//3. Fetch data from https://jsonplaceholder.typicode.com/users
//4. Display users from this API (just the names)
//OPTIONAL - html