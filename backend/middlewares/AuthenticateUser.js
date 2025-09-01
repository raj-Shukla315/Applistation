const jwt = require("jsonwebtoken");
require("dotenv").config();

const AuthenticateUser = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "No token provided" });
  }

  const token = authHeader.split(" ")[1]; // Get token after "Bearer"

  if (!token) {
    return res.status(401).json({ message: "Token missing" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // console.log("✅ Decoded token payload:", decoded);
    if (!decoded.userId) {
      return res.status(403).json({ message: "Token is valid but missing userId" });
    }

    req.user = { userId: decoded.userId }; // 👈 Ensure structure matches what controller expects
    next();
  } catch (err) {
    console.error("JWT verification failed:", err.message);
    res.status(403).json({ message: "Invalid token" });
  }
};

module.exports = AuthenticateUser;
