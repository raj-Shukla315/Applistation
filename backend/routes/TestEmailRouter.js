const SendEmail = require("../utils/SendEmail.js");
const express = require("express");
const router = express.Router();

// Test route to send a test email
router.get("/test-email", async (req, res) => {
  try {
    await SendEmail(
      "rajshukla11204@gmail.com", // Your own email address to receive the test
      "Test Email from Applistation",
      "This is a test email to verify your email credentials."
    );
    res.send("Test email sent! Check your inbox.");
  } catch (err) {
    res.status(500).send("Failed to send test email: " + err.message);
  }
});

module.exports = router;
