const fs = require("fs");

const getAnalysis = async (req, res) => {
    try{

        res.render("analiza-forma");
        
    }catch(err){
        console.log(err);
        res.status(500).send("Internal Server Error")
    }

};

//Nie sme ucenici vo SEMOS. Ucime Nodejs vo 19:30 sekoj Vtornik, Cetvrtok i Petok. Vo sreda ne ucime.

const postAnalysis = async (req, res) =>{
    const { txt } = req.body;

    if(!txt){
        res.status(400).send("Bad request");
    }
       
    //vkupen broj na karakteri
    const charLength = txt.length;
    //vkupen broj na zborovi
    const words = txt.split(" ");
    //vkupen broj na zborovi pomali od 5 karakteri
    const wordsLessThanFive = words.filter((word) => word.length < 5).length;

    //vkupen broj na zborovi pogolemi od 5 karakteri
    const wordsMoreThanFive = words.filter((word) => word.length > 5).length;

    //vkupen broj na zborovi ednakvi na 5 karakteri
    const wordsWithFive = words.filter((word) => word.length === 5).length;

    const sentence = txt.split(".");
    console.log("sentence", sentence);

    const wordsWithLetter = words.filter((word) => {
        if (
            word.startsWith("a") ||
            word.startsWith("o") ||
            word.startsWith("u") ||
            word.startsWith("i") ||
            word.startsWith("e") 
        )
            return word;
    });
    
    const data = {
        numChars: charLength,
        lessThanFive: wordsLessThanFive,
        moreThanFive: wordsMoreThanFive,
        equalToFive: wordsWithFive,
        sentenceLenght: sentence.length-1,
        wordLenght: words.length,
        wordsVowels: wordsWithLetter.length
    };

    try {

            res.render("analiza-rezultat", {...data});
    }catch(err){
        console.log(err);
        res.status(500).send("Internal Server Error")
    }

};

module.exports = {
    getAnalysis,
    postAnalysis
}