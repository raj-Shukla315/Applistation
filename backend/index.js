const express = require("express");
const app = express();
const DBconnection = require("./db");
require('dotenv').config();
const PORT = process.env.PORT || 8080;
const cors = require("cors");
const AuthRouter = require("./routes/AuthRouter.js");
const ApplicationsRouter = require("./routes/ApplicationsRouter.js");
const AtsRouter = require("./routes/AtsRouter.js");
const StartInterviewReminder = require("./cron/InterviewReminder");
const TestEmailRouter = require("./routes/TestEmailRouter");

// CORS: Allow your Vercel frontend
app.use(cors({
  origin: ["https://applistation-mu.vercel.app"], 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

app.use(express.json());

app.use("/auth", AuthRouter);
app.use("/myapplications", ApplicationsRouter);
app.use("/upload", AtsRouter);
app.use("/", TestEmailRouter);

DBconnection()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`SERVER IS SUCCESSFULLY STARTED AT PORT ${PORT}`);
    });
    StartInterviewReminder();
  })
  .catch((err) => {
    console.error('DB Connection Failed:', err);
  });

