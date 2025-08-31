const express = require("express")
const app = express();
const DBconnection = require("./db")
require('dotenv').config();
const PORT = process.env.PORT || 8080;
const cors = require("cors")
const AuthRouter = require("./routes/AuthRouter.js")
const ApplicationsRouter = require("./routes/ApplicationsRouter.js")
const AtsRouter = require("./routes/AtsRouter.js")
const StartInterviewReminder = require("./cron/InterviewReminder");

app.use(express.json())
app.use(cors())

app.use("/auth",AuthRouter)
app.use("/myapplications",ApplicationsRouter)
app.use("/upload",AtsRouter)
const TestEmailRouter = require("./routes/TestEmailRouter");
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

