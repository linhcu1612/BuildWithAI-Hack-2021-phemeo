/** @format */

import React from "react";
import Thead from "./Thead";
import Tbody from "./Tbody";

const DashBoard = () => {
  const data = {
    columns: [
      "name",
      "gpa",
      "transport",
      "transport time",
      "late submission",
      "label",
      "attendance",
      "feedback",
      "status",
    ],
    rows: [
      {
        name: "John Doe",
        gpa: "3.5",
        transport: "Train",
        transportTime: "30 mins",
        lateSubmission: "No",
        label: "green",
        attendance: "Yes",
        feedback: "No",
        status: "Low",
      },
    ],
  };

  return (
    <div className='flex flex-col mt-8'>
      <div className='overflow-x-auto'>
        <div className='align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200'>
          <table className='min-w-full'>
            <Thead columns={data.columns} />
            <Tbody rows={data.rows} />
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
