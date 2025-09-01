import React, { useState } from "react";

const DetailsForm = ({ onSubmitApplication }) => {
  const [formData, setformData] = useState({
    jobTitle: "",
    companyName: "",
    status: "Applied",
    jobLink: "",
    notes: "",
    date: new Date().toISOString().split("T")[0],
     
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData((prev) => {
      if (name === "status" && value !== "Interview") {
        const { interviewDate, ...rest } = prev;
        return { ...rest, [name]: value };
      }
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitApplication(formData);
    setformData({
      jobTitle: "",
      companyName: "",
      status: "Applied",
      jobLink: "",
      notes: "",
      date: new Date().toISOString().split("T")[0],
      
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 p-6 max-w-md mx-auto bg-white rounded-2xl shadow-xl
      dark:bg-gradient-to-b dark:from-blue-400 dark:to-blue-950"
    >
      <h2 className="text-2xl font-semibold text-gray-800 text-center dark:text-white">
        Add Job Application
      </h2>

      <input
        name="jobTitle"
        placeholder="Frontend Developer"
        type="text"
        onChange={handleChange}
        value={formData.jobTitle}
        className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500
        text-gray-800 dark:text-white"
      />

      <input
        name="companyName"
        placeholder="Company Name e.g. Google"
        type="text"
        onChange={handleChange}
        value={formData.companyName}
        className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500
        text-gray-800 dark:text-white"
      />

      <select
        name="status"
        onChange={handleChange}
        value={formData.status}
        className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500
        text-gray-800 dark:text-white"
      >
        <option className="text-gray-800 dark:text-white dark:bg-gray-700">Applied</option>
        <option className="text-gray-800 dark:text-white dark:bg-gray-700">Interview</option>
        <option className="text-gray-800 dark:text-white dark:bg-gray-700">Offer</option>
        <option className="text-gray-800 dark:text-white dark:bg-gray-700">Rejected</option>
      </select>
      
      {formData.status === "Interview" && (
        <label className="block mt-3 text-gray-800 ">
          <span>Interview Date:</span>
          <input
            type="date"
            name="interviewDate"
            value={formData.interviewDate || ""}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-2 focus:outline-none focus:ring-blue-500
            text-gray-800 dark:text-white "
          />
        </label>
      )}

      <input
        name="jobLink"
        placeholder="Paste job link here e.g. https://careers.google.com/jobs/results/"
        type="url"
        onChange={handleChange}
        value={formData.jobLink}
        className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500
        text-gray-800 dark:text-white "
      />

      <textarea
        name="notes"
        placeholder="Quick notes about this application..."
        onChange={handleChange}
        value={formData.notes}
        rows={4}
        className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500
        text-gray-800 dark:text-white "
      />

      <input
        name="date"
        type="date"
        onChange={handleChange}
        value={formData.date}
        className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500
        text-gray-800 dark:text-white "
      />

      <button
        type="submit"
        className="w-full text-white font-semibold py-3 rounded-md transition cursor-pointer
        bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500
        dark:bg-gradient-to-b dark:from-blue-400 dark:to-blue-900"
      >
        <span className="text-xl">+</span> Add Application
      </button>
    </form>
  );
};

export default DetailsForm;