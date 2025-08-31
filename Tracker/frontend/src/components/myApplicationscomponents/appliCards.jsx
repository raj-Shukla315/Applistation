import React from "react";

const statusColors = {
  Applied: "bg-blue-200 text-blue-950",
  Interview: "bg-yellow-100 text-yellow-950",
  Offer: "bg-green-100 text-green-950",
  Rejected: "bg-red-100 text-red-950",
};
import { FaTrash, FaEdit } from "react-icons/fa";

const AppliCards = ({ application, onEdit, onDelete }) => {
  const colorClasses = statusColors[application.status] || "bg-gray-100 text-gray-800";

  return (
    <div className="bg-white shadow-md rounded p-4 relative dark:bg-gradient-to-b from-blue-700 to-blue-200">
      <h3 className="font-semibold text-lg dark:text-white">{application.jobTitle}</h3>
      <p className="text-gray-600 dark:text-black">{application.companyName}</p>
      <p className={`text-sm mt-2 inline-block px-2 py-1 rounded ${colorClasses}`}>
        {application.status}
      </p>
      <p className="text-sm text-gray-500 mt-2 dark:text-black">
        Submitted on: {new Date(application.date).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "short",
    day: "2-digit"
  })}
      </p>
      

      <div className="flex justify-end gap-2 mt-4">
        <button onClick={onEdit} className="text-blue-600 hover:underline text-sm cursor-pointer">
          <FaEdit/>
        </button>
        <button onClick={onDelete} className="text-red-600 hover:underline text-sm cursor-pointer">
           <FaTrash/>
        </button>
      </div>
    </div>
  );
};


export default AppliCards
