import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const Statistics = () => {
    const data02 = [
        { Assignment: '1', value: 60 },
        { Assignment: '2', value: 60 },
        { Assignment: '3', value: 60 },
        { Assignment: '4', value: 55 },
        { Assignment: '5', value: 60 },
        { Assignment: '6', value: 59 },
        { Assignment: '7', value: 60 },
        { Assignment: '8', value: 60 },
    ]

    return (
      <div className="flex md:justify-center mx-auto md:overflow-x-hidden overflow-x-scroll">
          <AreaChart
          width={450}
          height={400}
          data={data02}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Assignment" />
          <YAxis dataKey="value"/>
          <Tooltip />
          <Area type="monotone" dataKey="Assignment" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="value" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
        </AreaChart>
      </div>
    );
};

export default Statistics;