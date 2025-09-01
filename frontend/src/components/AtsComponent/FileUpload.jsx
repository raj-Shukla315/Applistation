import React, { useState } from "react";

export default function FileUpload({ onFileSelect }) {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name); // store file name to show in UI
      onFileSelect(file); // send file back to parent
    }
  };

  return (
    <div className="flex items-center space-x-4">
      <label className="bg-blue-600 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-700 transition dark:bg-gradient-to-b from-blue-400 to-blue-900">
        Upload Resume
        <input
          type="file"
          accept=".pdf"
          onChange={handleFileChange}
          className="hidden"
        />
      </label>

      {fileName && (
        <span className="text-sm text-gray-600 truncate max-w-xs dark:text-amber-50">
          {fileName}
        </span>
      )}
    </div>
  );
}

