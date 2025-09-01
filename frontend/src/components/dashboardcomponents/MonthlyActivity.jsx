import React from "react";
import { useEffect, useState } from "react";
import axios from "../../../utils/AxiosInstance";import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec",]

export default function MonthlyActivity(){

 const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const res = await axios.get("/getApplication");
        setApplications(res.data);
      } catch (error) {
        console.error("Failed to fetch applications", error);
      }
    };
    fetchApplications();
  }, []);

   const monthlyCounts = Array(12).fill(0);
  applications.forEach(app => {
    const date = new Date(app.date);
    const month = date.getMonth(); // 0 = Jan, 11 = Dec
    if (!isNaN(month)) monthlyCounts[month]++;
  });

  const data = months.map((name, i) => ({
    name,
    uv: monthlyCounts[i]
  }));
  
return (
  <div className="bg-white dark:bg-gradient-to-b from-blue-700 to-blue-200 rounded-xl p-4 shadow-md">
    <h1 className="flex justify-center text-lg font-semibold dark:text-white mb-4">
      Job Applied
    </h1>
    <div className="w-full h-64 sm:h-70 md:h-80">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 5, right: 5, bottom: 10, left: -1}}
        >
          <CartesianGrid stroke="black" strokeDasharray="5 5" />
           <Line
            type="monotone"
            dataKey="uv"
            stroke="#2563eb"
            strokeWidth={3}
            name="Jobs Applied"
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
          <XAxis
            dataKey="name"
            interval={0}
            angle={-45}
            textAnchor="end"
            tick={{ fontSize: 10 , fill:"black" }}
          />
          <YAxis
            label={{
              value: "Applications",
              position: "insideLeft",
              angle: -90,
              fontSize: 12,
              fill: "white",
            }}
            tick={{ fontSize: 12 , fill:"black"}}
          />
           
          
          <Legend align="right" verticalAlign="bottom" wrapperStyle={{fontSize:12, color:"white"}}/>
          <Tooltip />
        </LineChart>
        
      </ResponsiveContainer>
    </div>
  </div>
)
};