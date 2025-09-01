const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserModel = require("../models/user");
require("dotenv").config();

const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (user) {
      return res
        .status(409)
        .json({ message: "User Already Exists", success: false });
    }
    const hashPassword = await bcrypt.hash(password,10)
    const newUser = new UserModel({ name, email, password:hashPassword });
    await newUser.save();
    res.status(200).json({
      message: "Signup Successful",
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
      success: false,
    });
  }
};

const login = async (req, res) => {
  try {
    const start = Date.now();
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    const ErrMsg = "Invalid Email or Password";
    if (!user) {
      return res.status(401).json({ message: ErrMsg, success: false });
    }

    const isPassEqual = await bcrypt.compare(password, user.password);
    if (!isPassEqual) {
      return res.status(401).json({
        message: ErrMsg,
        success: false,
      });
    }

    const jwtToken = jwt.sign(
      { email: user.email, userId: user._id },//pay load
      process.env.JWT_SECRET,// secret key
      { expiresIn: "10h" }//valid unitil 10h
    );

    res.status(200).json({
      message: "Login Success",
      success: true,
      jwtToken,
      email,
      name: user.name,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
      success: false,
    });
  }
};


module.exports = {
  signup,
  login,
};
