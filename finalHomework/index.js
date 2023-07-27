const express = require("express");
const { getAnalysis, postAnalysis } = require("./controllers");

const app  = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));

app.get("/analiza", getAnalysis);
app.post("/analiza", postAnalysis);

app.listen(8080, (err) => {
    if (err) console.log(err);
    console.log("Server started!");
})