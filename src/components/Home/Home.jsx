import React, { useEffect, useState } from 'react';
import person from '../../assets/All Images/person.png'
import JobCategory from '../JobCategory/JobCategory';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';
const Home = () => {

    return (
        <div className="my-container">
            <div >
                <div className='md:flex  items-center gap-10 '>
                    <div className="">
                        <h1 className="font-bold md:text-7xl text-2xl">One Step <br /> <span>Closer To Your</span> <span style={{ color: 'rgba(126, 144, 254, 1)' }} >Dream Job</span> </h1>
                        <p className="text-gray-400 font-medium md:text-base text-sm  mt-4">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                        <button style={{ background: 'linear-gradient(90deg, #7E90FE 0%, #9873FF 100%)' }} className='px-2 py-2 mt-2 font-semibold  text-white text-base btn border-none rounded-lg'>Get Started </button>
                    </div>


                    <div className="">
                        <img className="" src={person} alt="" />
                    </div>
                </div>

            </div>
            <div>

                <JobCategory></JobCategory>
                <FeaturedJobs></FeaturedJobs>
            </div>
        </div>
    );
};

export default Home;