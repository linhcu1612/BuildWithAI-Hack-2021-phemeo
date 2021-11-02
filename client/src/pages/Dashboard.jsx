/** @format */

import React, { useState } from "react";
import Thead from "../components/Thead";
import Tbody from "../components/Tbody";
import Loader from "../components/Loader";

import { useQuery } from "urql";
import { gql } from "@urql/core";

const StudentsQuery = gql`
  query {
    Students {
      students {
        name
        public_transport
        gpa
        on_time_submissions
        coaching_classes
        mental_status
        fast_internet
        positive_feedback
        travel_time_median
        attendance_good
        attendance_normal
        attendance_poor
      }
    }
  }
`;

const dataSet = {
  columns: [
    "id",
    "gpa",
    "transport",
    "fast internet",
    "late submission",
    "attendance",
    "feedback",
    "status",
  ],
  rows: [
    {
      id: 1,
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
  const [result] = useQuery({
    query: StudentsQuery,
  });
  const { data, fetching, error } = result;

  return (
    <div className='flex flex-col mt-8'>
      <div className='overflow-x-auto'>
        <div className='align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200'>
          {fetching ? (
            <Loader />
          ) : (
            <>
              <table className='min-w-full'>
                {data.Students.students && (
                  <>
                    <Thead columns={dataSet.columns} />
                    <Tbody data={data.Students.students} />
                  </>
                )}
              </table>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
