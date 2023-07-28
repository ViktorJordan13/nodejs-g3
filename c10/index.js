const express = require("express");

const formRouter = require("./routes/form");

const groceriesRouter = require("./routes/groceries");

const brishiRouter = require("./routes/brishi");

const editirajRouter = require("./routes/editiraj");

const app = express();

const ports = process.env.PORT || 3000;

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.use('/form', formRouter);

app.use('/groceries', groceriesRouter);

app.use('/brishi', brishiRouter);

app.use('/editiraj', editirajRouter);

app.listen(ports, () => console.log(`listening on port ${ports}`));