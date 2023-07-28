const express = require('express');

const {getForm, postForm} = require("../controllers/formular");

const router = express.Router();

router.get("/", getForm);

router.post("/", postForm);

module.exports = router;
