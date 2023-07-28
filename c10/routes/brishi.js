const express = require('express');

const {getBrishi} = require("../controllers/formular");

const router = express.Router();

router.get("/", getBrishi);

module.exports = router;