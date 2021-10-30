/** @format */

import React from "react";

//gpa, mode of transport, transport time, late submission, label, attendance, feedback

const Tbody = (props) => {
  return (
    <tbody className='bg-white'>
      {props.rows.map((student, index) => {
        return (
          <tr key={index}>
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
                {student.transport}
              </div>
            </td>

            <td className='px-4 py-4 whitespace-no-wrap border-b border-gray-200'>
              <div className='text-sm leading-5 text-gray-900'>
                {student.transportTime}
              </div>
            </td>

            <td className='px-4 py-4 whitespace-no-wrap border-b border-gray-200'>
              <div className='text-sm leading-5 text-gray-900'>
                {student.lateSubmission}
              </div>
            </td>

            <td className='px-4 py-4 whitespace-no-wrap border-b border-gray-200'>
              <div className='text-sm leading-5 text-gray-900'>
                {student.label}
              </div>
            </td>

            <td className='px-4 py-4 whitespace-no-wrap border-b border-gray-200'>
              <div className='text-sm leading-5 text-gray-900'>
                {student.attendance}
              </div>
            </td>

            <td className='px-4 py-4 whitespace-no-wrap border-b border-gray-200'>
              <div className='text-sm leading-5 text-gray-900'>
                {student.feedback}
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
