import React, { useEffect } from "react";
import { useState } from "react";
import DetailsForm from "../components/myApplicationscomponents/detailsForm";
import AppliCards from "../components/myApplicationscomponents/appliCards";
import axios from "../../utils/AxiosInstance";

const myApplications = () => {
  const [ShowForm, setShowForm] = useState(false);
  const [Applications, setApplications] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editData, setEditData] = useState(null);

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const res = await axios.get("/getApplication");
      setApplications(res.data);
    } catch (error) {
      console.error("Failed to Fetch Applications", error);
    }
  };

  const onSubmitApplication = async (formData) => {
    try {
      if (editId) {
        // Update existing application
        const res = await axios.put(`/updateApplication/${editId}`, formData);
        setApplications(Applications.map(app =>
          app._id === editId ? res.data.data : app
        ));
        setEditId(null);
        setEditData(null);
      } else {
        // Add new application
        const res = await axios.post("/addApplication", formData);
        setApplications([res.data.data, ...Applications]);
      }
      setShowForm(false);
    } catch (error) {
      console.error("Submission Failed!", error);
    }
  };

  const handleUpdate = (id) => {
    const appToEdit = Applications.find(app => app._id === id);
    setEditId(id);
    setEditData(appToEdit);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    try {
      const confirm = window.confirm(
        "Are you sure you want to delete this application?"
      );
      if (!confirm) return;

      await axios.delete(`/deleteApplication/${id}`);
      setApplications(Applications.filter((app) => app._id !== id));
    } catch (error) {
      console.error("Failed to delete application:", error);
    }
  };

  return (
    <div className="p-2">
      <div className="flex justify-between items-center mb-4">
        <h2 className="sm:text-base md:text-xl font-bold dark:text-white">My <span className="text-blue-500">Applications</span></h2>
        <button
          onClick={() => {
            setShowForm(!ShowForm);
            setEditId(null);
            setEditData(null);
          }}
          className={`px-4 py-2 rounded-xl text-white ${
            ShowForm ? "bg-red-500 sm:text-base md:text-xl cursor-pointer dark:bg-gradient-to-b from-red-400 to-red-900" : "bg-blue-600 sm:text-base md:text-xl cursor-pointer dark:bg-gradient-to-b from-blue-400 to-blue-900"
          }`}
        >
          {ShowForm ? "Cancel" : "+ Add Application"}
        </button>
      </div>

      {ShowForm && (
        <DetailsForm
          onSubmitApplication={onSubmitApplication}
          initialData={editData}
        />
      )}

      {!ShowForm && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {Applications.length === 0 ? (
            <p className="text-gray-600 text-center col-span-full">
              No applications added yet.
            </p>
          ) : (
            Applications.map((app) => (
              <AppliCards
                key={app._id}
                application={app}
                onDelete={() => handleDelete(app._id)}
                onEdit={() => handleUpdate(app._id)}
              />
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default myApplications;
