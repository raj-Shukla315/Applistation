const MyApplications = require("../models/ApplicationModel");


const handleAddapplication = async (req, res) => {
  try {
    const { jobTitle, companyName, status, date, jobLink, notes } = req.body;

    // Validate required fields
    if (!jobTitle || !companyName || !status || !date) {
      return res
        .status(400)
        .json({ message: "All required fields must be filled." });
    }

    // Add user ID from token
    const newApplication = new MyApplications({
      jobTitle,
      companyName,
      status,
      date,
      jobLink,
      notes,
      userId: req.user.userId,
    });

    const savedApp = await newApplication.save();

    console.log("Application added", savedApp);

    res
      .status(201)
      .json({ message: "Application added successfully", data: savedApp });
     
      if (status === "Interview" && req.body.interviewDate) {
  const user = await User.findById(req.user.userId);
      }
  } catch (error) {
    console.error("Error adding application:", error.message);
    res.status(500).json({ message: error.message, success: false });
  }
};

const handleGetapplication = async (req, res) => {
  try {
    const applications = await MyApplications.find({
      userId: req.user.userId,
    }).sort({ date: -1 })
    .lean()
    res.json(applications);
  } catch (error) {
    res.status(500).json({ message: error.message, success: false });
  }
};

const handleUpdateapplication = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  try {
    const updated = await MyApplications.findByIdAndUpdate(
      { _id: id, userId: req.user.userId },
      updates,
      { new: true }
    );
    if (!updated) {
    return  res
        .status(404)
        .json({ Message: "Application not found or unauthorized" });
    }
    res.json({ Message: "Data Updated Successfully", data: updated });
  } catch (error) {
    res.status(500).json({ Message: error.message, success: false });
  }
};

const handleDeleteapplication = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await MyApplications.findByIdAndDelete({
      _id: id,
      userId: req.user.userId,
    });

    if (!deleted) {
     return res
        .status(404)
        .json({ Message: "Application not found or unauthorized" });
    }
    res.json({ Message: "Application Deleted successfully" });
  } catch (error) {
    res.status(500).json({ Message: error.message, success: false });
  }
};
module.exports = {
  handleAddapplication,
  handleGetapplication,
  handleUpdateapplication,
  handleDeleteapplication,
};
