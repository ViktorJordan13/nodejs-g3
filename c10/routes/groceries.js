const express = require('express');

const {getGroceries} = require("../controllers/formular");

const router = express.Router();

router.get("/", getGroceries);

module.exports = router;