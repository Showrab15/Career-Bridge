import React from 'react';
import { PieChart, Pie,Tooltip  } from 'recharts';

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
        <div className='text-center my-container'>
            <h1 className='font-bold text-3xl'>This is my Assignment marks chart!!!!</h1>
            <PieChart className='md:mx-auto text-center border border-violet-500 shadow-2xl mt-12' width={400} height={400}>
          <Pie isAnimationActive={false} data={data02} dataKey="value" cx={200}cy={200} outerRadius={80} fill="#8884d8"label/>
          <Tooltip></Tooltip>
          
        </PieChart>
        </div>
    );
};

export default Statistics;