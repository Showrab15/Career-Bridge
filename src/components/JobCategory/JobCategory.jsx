import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleJobListCategory from '../SingleJobListCategory/SingleJobListCategory';

const JobCategory = () => {


    const [jobCategoryList,setJobCategoryList ]= useState([]);

    // useEffect for fetch job Cateogry list data
    useEffect(()=>{
        fetch('joblist.json')
        .then(res => res.json())
        .then(data =>setJobCategoryList(data))
    },[])   
    return (
        <div>
        <div className="mt-4 text-center  ">
          <h1 className="font-bold   text-4xl">Job Category List</h1>
          <p className="text-gray-400 font-normal text-base mt-4">Explore thousands of job opportunities with all the information you need. Its your future</p>
</div>
          <div className="grid  md:grid-cols-4 lg:grid-cols-4 justify-center  my-container gap-20 ">
          {
jobCategoryList.map( singleJobCategoryList => <SingleJobListCategory
key ={singleJobCategoryList.id}
    singleJobCategoryList={singleJobCategoryList}

></SingleJobListCategory>)
          }
          </div>
        </div>
    );
};

export default JobCategory;