/** @format */

import React from "react";

//gpa, mode of transport, transport time, late submission, label, attendance, feedback

const Tbody = (props) => {
  const colorSelector = (value) => {
    if (value === 1) {
      return "green";
    } else {
      return "red";
    }
  };

  return (
    <tbody className='bg-white'>
      {props.rows.map((student) => {
        return (
          <tr key={student.id}>
            <td className='px-4 py-4 whitespace-no-wrap border-b border-gray-200'>
              <div className='text-sm leading-5 text-gray-900'>
                {student.id}
              </div>
            </td>
            <td className='px-4 py-4 whitespace-no-wrap border-b border-gray-200'>
              <div className='text-sm leading-5 text-gray-900'>
                {student.name}
              </div>
            </td>

            <td className='px-4 py-4 whitespace-no-wrap border-b border-gray-200'>
              <div className='text-sm leading-5 text-gray-900'>
                {student.gpa}
              </div>
            </td>

            <td className='px-4 py-4 whitespace-no-wrap border-b border-gray-200'>
              <div className='text-sm leading-5 text-gray-900'>
                {student.transport === 1 ? "Train" : "Bus"}
              </div>
            </td>

            <td className='px-4 py-4 whitespace-no-wrap border-b border-gray-200'>
              <div className='text-sm leading-5 text-gray-900'>
                {student.travelTime}
              </div>
            </td>

            <td className='px-4 py-4 whitespace-no-wrap border-b border-gray-200'>
              <div
                className='text-sm leading-5'
                style={{
                  color: `${colorSelector(student.lateSubmission)}`,
                }}>
                {student.lateSubmission === 1 ? "Yes" : "No"}
              </div>
            </td>

            <td className='px-4 py-4 whitespace-no-wrap border-b border-gray-200'>
              <div
                className='text-sm leading-5 text-gray-900'
                style={{
                  color: `${colorSelector(student.attendance)}`,
                }}>
                {student.attendance === 1 ? "Yes" : "No"}
              </div>
            </td>

            <td className='px-4 py-4 whitespace-no-wrap border-b border-gray-200'>
              <div
                className='text-sm leading-5 text-gray-900'
                style={{
                  color: `${colorSelector(student.feedback)}`,
                }}>
                {student.feedback === 1 ? "Yes" : "No"}
              </div>
            </td>

            <td className='px-4 py-4 whitespace-no-wrap border-b border-gray-200'>
              <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800'>
                {student.status}
              </span>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default Tbody;
