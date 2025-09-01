import { FaEnvelope, FaCalendarAlt, FaFileAlt, FaHandshake } from "react-icons/fa"

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
      <Card icon={FaFileAlt} title="Resume ATS Score" value="0" />
    </div>
  );
};

export default DashboardCards;
