/** @format */

import React from "react";

const Thead = (props) => {
  return (
    <thead>
      <tr>
        {props.columns.map((column, index) => {
          return (
            <th
              key={index}
              className='px-4 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider'>
              {column}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

export default Thead;
