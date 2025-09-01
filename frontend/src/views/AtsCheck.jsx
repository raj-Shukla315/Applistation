import { useState } from "react";
import FileUpload from "../components/AtsComponent/FileUpload";
import JobDescriptionInput from "../components/AtsComponent/JobDescription";
import FeedbackCard from "../components/AtsComponent/FeedbackCard";
import Loader from "../components/AtsComponent/Loader";
import useAtsCheck from "../hooks/useAtsCheck";

export default function AtsChecker() {
  const [resume, setResume] = useState(null);
  const [jd, setJd] = useState("");
  const { loading, feedback, checkAts } = useAtsCheck();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!resume || !jd) return alert("Please upload resume and enter JD.");
    await checkAts(resume, jd);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center dark:text-white">ATS Score <span className="text-blue-500 dark:text-blue-500">Analyzer</span></h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <FileUpload onFileSelect={(file) => setResume(file)} />
        <JobDescriptionInput value={jd} onChange={setJd}/>
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition dark:bg-gradient-to-b from-blue-400 to-blue-900"
        >
          Check ATS Score
        </button>
      </form>

      {loading && <Loader />}
      {feedback && <FeedbackCard feedback={feedback} />}
    </div>
  );
}
