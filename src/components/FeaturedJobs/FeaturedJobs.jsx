import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleFeaturedJob from '../SingleFeaturedJob/SingleFeaturedJob';

const FeaturedJobs = () => {

    // useState for fetch all jobs
    const [featuredJobs, setFeaturesJobs] = useState([]);

    // useState for show all and see less button
    const [show, setShow] = useState(true)


    // useEffect for fetch all data of jobs 
    useEffect(() => {
        fetch('featuredjob.json')
            .then(res => res.json())
            .then(data => setFeaturesJobs(data))
    }, [])





    return (
        <div>
            <div className="text-center">
                <h1 className="font-bold text-4xl ">Featured Jobs</h1>
                <p className="text-gray-400 font-normal text-base mt-4">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='grid lg:grid-cols-2 gap-20 my-container'>
                {
                    show ? featuredJobs.slice(0, 4).map(singleFeaturedJob => <SingleFeaturedJob

                        key={singleFeaturedJob.id}
                        singleFeaturedJob={singleFeaturedJob}
                    ></SingleFeaturedJob>) : featuredJobs.map(singleFeaturedJob => <SingleFeaturedJob

                        key={singleFeaturedJob.id}
                        singleFeaturedJob={singleFeaturedJob}
                    ></SingleFeaturedJob>)
                }
            </div>
            <div className='text-center'>
                {
                    show ? <button onClick={() => setShow(!show)} className="btn btn-primary">Show All</button> : <button onClick={() => setShow(!show)} className="btn btn-primary">See Less</button>

                }
            </div>
        </div>
    );
};

export default FeaturedJobs;