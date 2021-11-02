/** @format */

import React from "react";

//gpa, mode of transport, transport time, late submission, label, attendance, feedback

const Tbody = (props) => {
  const colorSelector = (value) => {
    if (value == 0) {
      return "green";
    } else {
      return "red";
    }
  };

  const statusColorSelector = (value) => {
    if (value == 0) {
      return { color: "rgb(6, 95, 70)", backgroundColor: "rgb(209, 250, 229)" };
    } else {
      return { color: "red", backgroundColor: "rgb(243, 159, 132)" };
    }
  };

  return (
    <tbody className='bg-white'>
      {props.data.map((student, index) => {
        return (
          <tr key={index}>
            <td className='px-4 py-4 whitespace-no-wrap border-b border-gray-200'>
              <div className='text-sm leading-5 text-gray-900'>{index}</div>
            </td>

            <td className='px-4 py-4 whitespace-no-wrap border-b border-gray-200'>
              <div className='text-sm leading-5 text-gray-900'>
                {Number.parseFloat(student.gpa).toFixed(2)}
              </div>
            </td>

            <td className='px-4 py-4 whitespace-no-wrap border-b border-gray-200'>
              <div className='text-sm leading-5 text-gray-900'>
                {student.public_transport === "1" ? "Train" : "Bus"}
              </div>
            </td>

            <td className='px-4 py-4 whitespace-no-wrap border-b border-gray-200'>
              <div
                className='text-sm leading-5'
                style={{
                  color: `${colorSelector(student.fast_internet)}`,
                }}>
                {student.fast_internet == 1 ? "Yes" : "No"}
              </div>
            </td>

            <td className='px-4 py-4 whitespace-no-wrap border-b border-gray-200'>
              <div
                className='text-sm leading-5'
                style={{
                  color: `${colorSelector(student.on_time_submissions)}`,
                }}>
                {student.on_time_submissions == 1 ? "Yes" : "No"}
              </div>
            </td>

            <td className='px-4 py-4 whitespace-no-wrap border-b border-gray-200'>
              <div
                className='text-sm leading-5 text-gray-900'
                style={{
                  color: `${colorSelector(student.attendance_normal)}`,
                }}>
                {student.attendance_normal === 1 ? "Yes" : "No"}
              </div>
            </td>

            <td className='px-4 py-4 whitespace-no-wrap border-b border-gray-200'>
              <div
                className='text-sm leading-5 text-gray-900'
                style={{
                  color: `${colorSelector(student.positive_feedback)}`,
                }}>
                {student.positive_feedback === 1 ? "Yes" : "No"}
              </div>
            </td>

            <td className='px-4 py-4 whitespace-no-wrap border-b border-gray-200'>
              <span
                className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full'
                style={statusColorSelector(student.mental_status)}>
                {student.mental_status == 1 ? "High" : "Low"}
              </span>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default Tbody;
