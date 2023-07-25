//EJS(Embedded JavaScript), others simmilar templating engines are Pug(Jade), Handlebars
//Templating rendering engine
//Partial views
//Syntax:
    //<% %> - Executes JavaScript code without outputting any HTML.
    //<%= %> - Outputs the result of the Javascript expression as HTML-escaped content.
    //<%- %> - Outputs the result of the Javascript expression as raw, unescaped content
    //<%# %> - Comments that are not included in the rendered output
    //<% include %> - Includes another EJS template file.

//Task
//1. Install axios or any module with simmilar purpose to get the data from https://jsonplaceholder.typicode.com/users
//2. Display the data from that API - usernames
//3. Display the data from that API - "name: phone number"
//Bonus: HTML

const express = require("express");

const app = express();

//EJS
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    let data = {
        fullName: "Pero Peroski",
        ime: "Viktor",
        prezime: "Jordanoski",
        array: [{imeNaElementot: "Element1"}, {imeNaElementot :"Element2"}],
        books: [{ author: "Viktor Hugo", year: 2012}],
    };

    res.render("index", data);
});

app.listen(8080, (err) => {
    if(err) console.log(err);
    console.log("Server started!")
});

//Homework
//1. na route  get /analiza 
//2. treba da se pojavuva formular vo koj ke ima textarea vo koja  ke se vnesuva text.
//3. pri pravenje na submit na formularot, podatocite ke se isprakaat na post /analiza
//4. Logika:
// Teksot vnesen vo textarea-ta ke bide analiziran i ispisan po slednive tocki:
    //vkupen broj na karakteri
    //vkupen broj na zborovi pomali od 5 karakteri
    //vkupen broj na zborovi pogolemi od 5 karakteri
    //vkupen broj na zborovi ednakvi na 5 karakteri
    //vkupen broj na recenici
    //vkupen broj na zborovi
    //BONUS broj na zborovi koi pocnuvaat na edna od slednive bukvi a, o, u, i, e

//Hints
//1. povikajte gi vo index.js modulite express i ejs, napravete edna get ruta /analiza i edna post ruta /analiza
//2. vo controllers napisete eden kontroler i vo nego vi e vaszno da imate 2 funkcii getAnalysis i postAnalysis
//3 napravete go vo views UI-to da bide ili so html formi(so parseTemplate) kako na cas 7, ili so ejs kako na ovoj cas (napravete naj ednostaven HTML text-form i button)
//4. Ili so parseTemplate ili so ejs prikazete gi so html elementi vo UI i vnesot i rezultatot (Views)
//Final hint: pri getAnalysis vratete res.render("get-forma(html ili ejs tip na fajl)")
//pri postAnalysis vratite res.render("post-forma(html ili ejs tip na fajl), ...data")