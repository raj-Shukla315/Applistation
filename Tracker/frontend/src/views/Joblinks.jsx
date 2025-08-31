import React from "react";

const Joblinks = () => {
  return (
    <div className="space-y-8 p-4 sm:p-6 md:p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white">
        Start <span className="text-blue-500">Applying</span>
      </h1>

      {/* Popular Portals */}
      <div className="bg-white rounded-xl p-6 shadow-xl dark:bg-gradient-to-b from-blue-600 to-black">
        <h2 className="font-bold text-xl sm:text-2xl md:text-3xl mb-4 text-blue-600 dark:text-white">
          Popular Portals
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          <JobLink href="https://www.linkedin.com/" color="bg-[#0A66C2]" label="LinkedIn" />
          <JobLink href="https://www.naukri.com" color="bg-[#2D64BC]" label="Naukri" />
          <JobLink href="https://www.indeed.com" color="bg-[#003A9B]" label="Indeed" />
          <JobLink href="https://www.glassdoor.com" color="bg-[#0CAA41]" label="Glassdoor" />
          <JobLink href="https://www.foundit.in" color="bg-[#6A1B9A]" label="Foundit" />
        </div>
      </div>
      
      
      
      {/* Internship Portals */}
      <div className="bg-white rounded-xl p-6 shadow-xl dark:bg-gradient-to-b from-blue-600 to-black">
        <h2 className="font-bold text-xl sm:text-2xl md:text-3xl mb-4 text-blue-600 dark:text-white">
          Internship Portals
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          <JobLink href="https://internshala.com" color="bg-[#00A5EC]" label="Internshala" />
          <JobLink href="https://www.letsintern.com" color="bg-[#FF5722]" label="LetsIntern" />
          <JobLink href="https://www.hellointern.com" color="bg-[#FFB300]" label="HelloIntern" />
          <JobLink href="https://angel.co" color="bg-[#000000]" label="AngelList" />
          <JobLink href="https://www.wayup.com" color="bg-[#3B82F6]" label="WayUp" />
        </div>
      </div>
      
      

      {/* Remote Job Portals */}
      <div className="bg-white rounded-xl p-6 shadow-xl dark:bg-gradient-to-b from-blue-600 to-black">
        <h2 className="font-bold text-xl sm:text-2xl md:text-3xl mb-4 text-blue-600 dark:text-white">
          Remote Job Portals
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <JobLink href="https://www.upwork.com" color="bg-[#14A800]" label="Upwork" />
          <JobLink href="https://www.fiverr.com" color="bg-[#1DBF73]" label="Fiverr" />
          <JobLink href="https://www.toptal.com" color="bg-[#0C6CF2]" label="Toptal" />
          <JobLink href="https://remoteok.com" color="bg-[#FF6600]" label="RemoteOk" />
          <JobLink href="https://weworkremotely.com" color="bg-[#EE3E52]" label="Remotely" />
          <JobLink href="https://www.flexjobs.com" color="bg-[#005E7C]" label="Flex Jobs" />
        </div>
      </div>
      
      

      {/* Service-Based Portals */}
      <div className="bg-white rounded-xl p-6 shadow-xl dark:bg-gradient-to-b from-blue-600 to-black">
        <h2 className="font-bold text-xl sm:text-2xl md:text-3xl mb-4 text-blue-600 dark:text-white">
          Service-Based Portals
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <JobLink href="https://www.tcs.com/careers" color="bg-[#007AC0]" label="TCS" />
          <JobLink href="https://www.infosys.com/careers" color="bg-[#007CC3]" label="Infosys" />
          <JobLink href="https://careers.wipro.com" color="bg-[#FE5000]" label="Wipro" />
          <JobLink href="https://www.hcltech.com/careers" color="bg-[#0E4D92]" label="HCL Tech" />
          <JobLink href="https://www.accenture.com/in-en/careers" color="bg-[#A100FF]" label="Accenture" />
          <JobLink href="https://careers.cognizant.com" color="bg-[#1A4CA1]" label="Cognizant" />
        </div>
      </div>
      
      

      {/* Product-Based Portals */}
      <div className="bg-white rounded-xl p-6 shadow-xl dark:bg-gradient-to-b from-blue-600 to-black">
        <h2 className="font-bold text-xl sm:text-2xl md:text-3xl mb-4 text-blue-600 dark:text-white">
          Product-Based Portals
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
          <JobLink href="https://careers.google.com" color="bg-[#4285F4]" label="Google" />
          <JobLink href="https://careers.microsoft.com" color="bg-[#2a56c6]" label="Microsoft" />
          <JobLink href="https://www.amazon.jobs" color="bg-[#FF9900]" label="Amazon" />
          <JobLink href="https://www.apple.com/careers" color="bg-[#000000]" label="Apple" />
          <JobLink href="https://www.metacareers.com" color="bg-[#0866FF]" label="Meta" />
          <JobLink href="https://jobs.netflix.com" color="bg-[#E50914]" label="Netflix" />
          <JobLink href="https://adobe.wd5.myworkdayjobs.com/en-US/external_experienced" color="bg-[#FF0000]" label="Adobe" />
        </div>
      </div>
      
      

      {/* Foreign-Based Portals */}
      <div className="bg-white rounded-xl p-6 shadow-xl dark:bg-gradient-to-b from-blue-600 to-black">
        <h2 className="font-bold text-xl sm:text-2xl md:text-3xl mb-4 text-blue-600 dark:text-white">
          Foreign-Based Portals
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
          <JobLink href="https://www.dice.com" color="bg-[#E31837]" label="Dice" />
          <JobLink href="https://triplebyte.com" color="bg-[#3A76F0]" label="Triplebyte" />
          <JobLink href="https://hired.com" color="bg-[#2C2C2C]" label="Hired" />
          <JobLink href="https://www.reed.co.uk" color="bg-[#003B6F]" label="Reed" />
          <JobLink href="https://www.eurojobs.com" color="bg-yellow-600" label="EuroJobs" />
          <JobLink href="https://www.stepstone.de" color="bg-[#0050A0]" label="StepStone" />
          <JobLink href="https://www.jobbank.gc.ca" color="bg-[#D71920]" label="Job Bank" />
        </div>
      </div>
    </div>
  );
};

// Reusable JobLink component
const JobLink = ({ href, color, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`transition transform hover:scale-105 ${color} text-white text-center  text-[12px] lg:text-sm font-semibold rounded-lg p-3 w-full`}
  >
    {label}
  </a>
);

export default Joblinks;