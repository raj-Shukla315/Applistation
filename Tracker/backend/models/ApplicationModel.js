const mongoose = require("mongoose");

const ApplicationSchema = new mongoose.Schema({
  jobTitle: {
    type: String,
    required: true,
  },

  companyName: {
    type: String,
    required: true,
  },

  status: {
    type: String,
    default: "Applied",
  },

  jobLink: {
    type: String,
  },

  notes: {
    type: String,
  },

  date: {
    type: Date,
    default: Date.now,
  },

  interviewDate: Date,

    userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
});

const MyApplications = mongoose.model("myapplications", ApplicationSchema);
module.exports = MyApplications;
