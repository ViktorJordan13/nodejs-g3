const { list, add, remove }  = require("../models/studenti");

const getForm = (req, res) => {
    res.render("formular");
}

const postForm = async (req, res) => {
    let studentData = {
        ime: req.body.ime,
        prezime: req.body.prezime,
        prosek: req.body.prosek
    };
    await add(studentData);
    res.redirect("/studenti"); //will navigate user to /studenti
    //by default the user is sent to GET page of /studenti
}

const getStudenti = async (req, res) => {
    let data = await list();
    res.render("studenti", { data });
};

const getBrishi = async (req, res) => {
    console.log("req query", req.query);
    await remove(req.query.studentIndex); //how will we name the var in the ejs file
    res.redirect("/studenti");
}

module.exports = {
    getForm,
    postForm,
    getStudenti,
    getBrishi
}