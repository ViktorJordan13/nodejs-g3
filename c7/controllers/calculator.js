const fs = require("fs");

const getCalculator = async (req, res) => {
    try{
        let output = await parseTemplate("calculator_form");
        res.send(output);
    }catch(err){
        console.log(err);
        res.status(500).send("Internal server error");
    }
};

const postCalculator = async (req, res) => {

    const {op, a, b} = req.body;

    if (a === "" || b === ""){
        return res.status(400).send("Bad Request");
    }

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
            res.end("Nepoznat operator");
    }
    try{
        let output = await parseTemplate("calculator", {data: result});
        res.send(output);
    }catch(err){
        console.log(err);
        res.status(500).send("Internal server error");
    }

};

const parseTemplate = async(template, data = null) => {
    //if we do not call functionparseTemplate with data, data will stay null
    console.log("path", `${__dirname}/../views/${template}.html`);
    return new Promise((success, fail) => {
        fs.readFile(
            `${__dirname}/../views/${template}.html`, //calculator_form.html
            "utf-8",
            (err, content) => {
                if(err) return fail(err);
                if(data){
                    for(d in data){
                        content = content.replaceAll(`{{${d}}}`, data[d]);
                    }
                }
                return success(content);
            }
        );
    });
};

module.exports = {
    getCalculator,
    postCalculator
}