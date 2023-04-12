import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const Statistics = () => {
  const assignmentData = [
    { Assignment: '1', value: 57, id: 1 },
    { Assignment: '2', value: 58, id: 2 },
    { Assignment: '3', value: 60, id: 3 },
    { Assignment: '4', value: 60, id: 4 },
    { Assignment: '5', value: 60, id: 5 },
    { Assignment: '6', value: 60, id: 6 },
    { Assignment: '7', value: 59, id: 7 },
    { Assignment: '8', value: 60, id: 8 },
  ]

  return (
    <div>
      <h1 className="text-center font-bold text-4xl">Assignment Marks Shows ByRecharts</h1>
      <div className="flex md:justify-center mx-auto md:overflow-x-hidden overflow-x-scroll">
        <AreaChart
          width={450}
          height={400}
          data={assignmentData}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Assignment" />
          <YAxis dataKey="value" />
          <Tooltip />
          <Area type="monotone" dataKey="Assignment" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="value" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
        </AreaChart>
      </div>
    </div>
  );
};

export default Statistics;