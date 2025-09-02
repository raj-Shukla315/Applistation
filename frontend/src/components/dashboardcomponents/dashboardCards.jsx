import { FaEnvelope, FaCalendarAlt, FaFileAlt, FaHandshake } from "react-icons/fa"
import { Link } from "react-router-dom";

const Card = ({ icon:Icon, title, value }) => (
  <div className="bg-white rounded-xl shadow p-4 flex flex-col gap-1 dark:bg-gradient-to-b from-blue-700 to-blue-200
">
    <div className="text-blue-900 dark:text-white"><Icon/></div>
    <p className="text-sm md:text-md text-gray-900">{title}</p>
    <h2 className="text-sm sm:text-base md:text-lg font-bold">{value}</h2>
  </div>
);

const DashboardCards = ({totalApplications = 0, interviewsScheduled = 0 , offerRecieved = 0 }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 ">
      <Card icon= {FaEnvelope} title="Applications Submitted" value={totalApplications} />
      <Card icon={FaCalendarAlt} title="Interviews Scheduled" value={interviewsScheduled} />
      <Card icon={FaHandshake} title="Offers Received" value={offerRecieved} />
     <div className="bg-white rounded-xl shadow p-4 flex flex-col gap-2 dark:bg-gradient-to-b from-blue-700 to-blue-200">
  <div className="text-blue-900 dark:text-white"><FaFileAlt size={28} /></div>
  <p className="text-sm md:text-md text-gray-900 font-semibold">Check ATS</p>
 <Link
  to="/dashboard/resume-score"
  className="mt-2 px-3 py-1 bg-blue-600 text-white rounded-lg text-xs sm:text-sm font-semibold text-center hover:bg-blue-700 transition"
>
  Go to ATS Score
</Link>
</div>
    </div>
  );
};

export default DashboardCards;
