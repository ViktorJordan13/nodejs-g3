const express = require('express');
const { getForm, postForm } = require("../controllers/formular");
const router = express.Router();

router.get("/", getForm); // Use the same getForm function for editing
router.post("/", postForm); // Use the same postForm function for editing

module.exports = router;
