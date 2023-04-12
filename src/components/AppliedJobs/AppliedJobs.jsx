import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getShoppingCart } from '../../utilities/fakedb';
import AppliedJobDetails from '../AppliedJobDetails/AppliedJobDetails'
const AppliedJobs = () => {

    // useLoader for jobs
    const jobs = useLoaderData();

    // useState for find the applied jobs data
    const [appliedJobs, setAppliedJobs] = useState([])

    // useState for filter data
    const [dataType, setDataType] = useState([]);

    useEffect(() => {
        const storedCart = getShoppingCart()
        let appliedJobList = [];


        for (const id in storedCart) {
            const foundedJob = jobs.find(job => job.id == id)
            if (foundedJob) {
                appliedJobList.push(foundedJob)
            }
        }
        setAppliedJobs(appliedJobList)
        setDataType(appliedJobList)
    }, [jobs])


    // event handler for filter data by remote and onsite

    const filterData = (type) => {
        if (type == 'Remote') {
            const newData = appliedJobs.filter(dt => dt.remoteOrOnSite == 'Remote')
            setDataType(newData)
        }
        else if (type == 'Onsite') {
            const newData = appliedJobs.filter(dt => dt.remoteOrOnSite == 'Onsite')
            setDataType(newData)
        }
    }



    return (
        <div className="my-container ">
            <div className="justify-center flex">
                <button style={{ background: 'linear-gradient(90deg, #7E90FE 0%, #9873FF 100%)' }} onClick={() => filterData('Remote')} className="btn border-none mr-4">Remote</button>
                <button style={{ background: 'linear-gradient(90deg, #7E90FE 0%, #9873FF 100%)' }} onClick={() => filterData('Onsite')} className="btn border-none">OnSite</button>
            </div>

            <div className="mt-8">
                {
                    dataType.map(appliedJobDetails => <AppliedJobDetails
                        appliedJobDetails={appliedJobDetails}
                        key={appliedJobDetails.id}
                    ></AppliedJobDetails>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;