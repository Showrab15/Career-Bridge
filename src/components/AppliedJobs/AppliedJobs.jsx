import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getShoppingCart } from '../../utilities/fakedb';
import AppliedJobDetails from '../AppliedJobDetails/AppliedJobDetails'
const AppliedJobs = () => {

const jobs = useLoaderData()
const [appliedJobs, setAppliedJobs] = useState([])
const [dataType, setDataType] = useState([])

useEffect(()=>{
    const storedCart = getShoppingCart()
    let appliedJobList = [];
    // console.log(storedCart);
    for(const id in storedCart){
        const foundedJob = jobs.find(job=> job.id == id)
        if(foundedJob){
            appliedJobList.push(foundedJob)
        }
    }
    setAppliedJobs(appliedJobList)
    setDataType(appliedJobList)
},[jobs])



const filterData =(type)=>{
    if(type== 'Remote'){
        const newData = appliedJobs.filter(dt => dt.remoteOrOnSite ==  'Remote')
        setDataType(newData)
    }
    else if(type== 'Onsite'){
        const newData = appliedJobs.filter(dt => dt.remoteOrOnSite ==  'Onsite')
        setDataType(newData)
    }
}


console.log(appliedJobs);

    return (
        <div className="my-container">
 <div className="justify-center flex">
<button onClick={()=>filterData('Remote')} className="btn mr-4">Remote</button>
<button onClick={()=> filterData('Onsite')} className="btn ">OnSite</button>
        </div>

<div className="">
    {
        dataType.map(appliedJobDetails => <AppliedJobDetails
            appliedJobDetails={appliedJobDetails}
        
        ></AppliedJobDetails>  )
    }
</div>
        </div>
    );
};

export default AppliedJobs;