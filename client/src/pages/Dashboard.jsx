/** @format */

import React, { useEffect, useState } from "react";
import Thead from "../components/Thead";
import Tbody from "../components/Tbody";
import Loader from "../components/Loader";

const dataSet = {
  columns: [
    "id",
    "name",
    "gpa",
    "transport",
    "travel time",
    "late submission",
    "attendance",
    "feedback",
    "status",
  ],
  rows: [
    {
      id: 1,
      name: "John Doe",
      gpa: 3.5,
      transport: 1, // 0 Bus, 1 Train
      travelTime: 30,
      lateSubmission: 0,
      attendance: 1,
      feedback: 0,
      status: "Low",
    },
  ],
};

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setData(dataSet);
    setLoading(false);
  }, []);

  return (
    <div className='flex flex-col mt-8'>
      <div className='overflow-x-auto'>
        <div className='align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200'>
          {loading ? (
            <Loader />
          ) : (
            <table className='min-w-full'>
              {data.length !== 0 && (
                <>
                  <Thead columns={data.columns} />
                  <Tbody rows={data.rows} />
                </>
              )}
            </table>
          )}
        </div>
      </div>
      <div className='flex justify-between mt-4 mx-5'>
        <div className=''>sort</div>
        <div className=''>import data</div>
      </div>
    </div>
  );
};

export default Dashboard;
