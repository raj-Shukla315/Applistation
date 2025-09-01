const express = require("express")
const router = express.Router()
const {signup , login} = require("../controllers/AuthController")
const {SignupValidation,LoginValidation} = require("../middlewares/AuthValidation")

router.post("/login",LoginValidation,login)
router.post("/signup",SignupValidation,signup)


module.exports = router