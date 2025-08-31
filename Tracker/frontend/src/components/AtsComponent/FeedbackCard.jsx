import React from "react";
import { FaCheckCircle, FaExclamationTriangle, FaLightbulb, FaPencilAlt } from "react-icons/fa";

export default function FeedbackCard({ feedback }) {
  if (!feedback) return null;

  return (
    <div className="mt-6 p-6 border rounded-lg shadow bg-white dark:bg-gradient-to-b from-cyan-300 to-white">
      <h2 className="text-2xl font-bold mb-4 text-blue-700">
        ATS Score: {feedback.ats_score}%
      </h2>

      {/* Strengths */}
      <section className="mb-4">
        <h3 className="flex gap-2 text-lg font-semibold text-green-600"><FaCheckCircle/> Strengths</h3>
        <ul className="list-disc list-inside space-y-1">
          {feedback.strengths?.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Weaknesses */}
      <section className="mb-4">
        <h3 className="text-lg font-semibold text-red-600 flex gap-2"><FaExclamationTriangle/> Weaknesses</h3>
        <ul className="list-disc list-inside space-y-1">
          {feedback.weaknesses?.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Suggestions */}
      <section className="mb-4">
        <h3 className="text-lg font-semibold text-blue-600 flex gap-2"><FaLightbulb/> Suggestions</h3>
        <ul className="list-disc list-inside space-y-1">
          {feedback.suggestions?.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Grammar Feedback */}
      <section>
        <h3 className="text-lg font-semibold text-purple-600 flex gap-2"><FaPencilAlt/> Grammar Feedback</h3>
        <ul className="list-disc list-inside space-y-1">
         {Array.isArray(feedback.grammar_feedback) && feedback.grammar_feedback.map((item, idx) => (
  <li key={idx}>{item}</li>
))}
        </ul>
      </section>
    </div>
  );
}
