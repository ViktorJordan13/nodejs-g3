const { list, add, remove }  = require("../models/groceries");

const getForm = async (req, res) => {
    const groceryIndex = Number(req.query.groceryIndex);
  
    // If groceryIndex is provided in the query, we are editing an existing grocery
    if (!isNaN(groceryIndex) && groceryIndex >= 0) {
      const data = await list();
      const grocery = data[groceryIndex];
      res.render("formular", { grocery, index: groceryIndex });
    } else {
      res.render("formular", { index: -1 }); // Provide index as -1 when adding a new grocery
    }
  };
  
  const postForm = async (req, res) => {
    const groceryIndex = Number(req.query.groceryIndex);
    let groceryData = {
      name: req.body.name,
      manufacturer: req.body.manufacturer,
      quantity: req.body.quantity,
      daysLeftToUse: req.body.daysLeftToUse,
      placeWhereAvalible: req.body.placeWhereAvalible,
    };
  
    if (!isNaN(groceryIndex) && groceryIndex >= 0) {
      // If groceryIndex is provided, we are editing an existing grocery
      await remove(groceryIndex);
    }
  
    await add(groceryData);
    res.redirect("/groceries");
  };

const getGroceries = async (req, res) => {
    let data = await list();
    res.render("groceries", { data });
};

const getBrishi = async (req, res) => {
    console.log("req query", req.query);
    await remove(req.query.groceryIndex); //how will we name the var in the ejs file
    res.redirect("/groceries");
}


module.exports = {
    getForm,
    postForm,
    getGroceries,
    getBrishi,
}