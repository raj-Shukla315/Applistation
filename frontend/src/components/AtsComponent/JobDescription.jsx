import React from "react";

const JobDescriptionInput = ({ value, onChange }) => {
  return (
    <div className="p-4 border rounded-lg dark:border-white ">
      <label className="block mb-2 font-semibold dark:text-white">Job Description</label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Paste the job description here..."
        rows="6"
        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-white dark:text-white"
      />
    </div>
  );
};

export default JobDescriptionInput;
