const express = require("express");
const AuthenticateUser = require("../middlewares/AuthenticateUser");
const { handleAddapplication,handleGetapplication,handleUpdateapplication,handleDeleteapplication} = require("../controllers/myapplicationController")
const router = express.Router();

router.post("/addApplication",AuthenticateUser,handleAddapplication)
router.get("/getApplication",AuthenticateUser,handleGetapplication)
router.put("/updateApplication/:id",AuthenticateUser,handleUpdateapplication)
router.delete("/deleteApplication/:id",AuthenticateUser,handleDeleteapplication)

module.exports=router
