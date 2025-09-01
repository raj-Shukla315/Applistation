const express = require("express");
const router = express.Router();
const {atscheck , upload} = require("../controllers/AtsController");
const AuthenticateUser = require("../middlewares/AuthenticateUser");

router.post("/ats-check",AuthenticateUser,upload.single("resume"), atscheck);

module.exports = router;