//Aplikacija za dodavanje i brisenje studenti so ime, prezime, prosek i fakultet
//Arhitektura:
// Frontend(Kaj nas ke bide toa views)->
//->Router (kaj nas toa e vo index.js, nemame potreba za poseben router fajl) ->
//->Controller->
//->Model->
//->Database(Kaj nas toa e fajlot students.json)

const express = require("express");
const {
    getForm,
    postForm,
    getStudenti,
    getBrishi,
} = require("./controllers/formular");

const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true })); //body-parser
//It is used when we have req.body => POST, PUT, PATCH
//When extended is TRUE req.body can be any type (string, object, array, number, undefined)
//When extended is FALSE req.body can be only string or array
app.use(express.static("public")); //React.js
//public folder contains data that the server will not process
//static assets refer to files that are served to the client without any modification by the server

app.get("/form", getForm);
app.post("/form", postForm);
app.get("/studenti", getStudenti);
app.get("/brishi", getBrishi);

app.listen(8080, (err) => {
    if (err) console.log(err);
    console.log("Server started at port: 8080");
});