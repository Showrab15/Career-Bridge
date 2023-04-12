import React from 'react';
import './SingleJobListCategory.css'
const SingleJobListCategory = ({singleJobCategoryList}) => {
    // console.log(singleJobCategoryList);
    const {job_img, job_name, available_jobs}= singleJobCategoryList;
    return (
        <div className="rounded-lg px-4 py-4 box" >

            <div className="img-box flex justify-center items-center">
            <img className="w-[40px] h-[40px]" src={job_img} alt="" />
           </div>

           <div  >
           <h1 style={{color:' #474747'}} className="font-bold text-base mt-2">{job_name}</h1>
            <p style={{color: '#A3A3A3'}} className="text-base mt-2 ">{available_jobs} jobs available</p>
           </div>

            </div>
         
      
    );
};

export default SingleJobListCategory;