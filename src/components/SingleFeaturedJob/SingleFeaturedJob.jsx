import React from 'react';
import { Link } from 'react-router-dom';
import { faLocationDot , faDollar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SingleFeaturedJob = ({singleFeaturedJob}) => {
    // console.log(singleFeaturedJob);
    const {company_logo, company_name, job_title , location , salary , id , remoteOrOnSite, fulltimeOrPartTime} =singleFeaturedJob
    return (
        <div className="w-full h-full rounded-md bg-red-50 px-4 py-4">
            <div className=''>
                <img className="w-32 h-12" src={company_logo} alt="" />
                <h1 className="font-bold text-lg mt-2">{job_title}</h1>
                <p style={{color: '#757575'}} className="font-semibold text-lg mt-2">{company_name}</p>
                <div className="flex mt-2">
                    <button style={{background: 'linear-gradient(90deg, #7E90FE 0%, #9873FF 100%)'}}  className="btn border-none mr-2">{remoteOrOnSite}</button>
                    <button style={{background: 'linear-gradient(90deg, #7E90FE 0%, #9873FF 100%)'}}  className="btn border-none">{fulltimeOrPartTime}</button>
                </div>
                <div className="flex mt-2">
                    <p style={{ color: "#757575"}} className="mr-4 font-semibold text-lg "> <FontAwesomeIcon icon={faLocationDot} />
{location}</p>
                    <p style={{ color: "#757575"}} className="font-semibold text-lg ml-2">  <FontAwesomeIcon className="ml-2" icon={faDollar} />
{salary}</p>
                </div>
                <Link to={`/job/${id}`}><button style={{background: 'linear-gradient(90deg, #7E90FE 0%, #9873FF 100%)'}}  className="font-bold text-base border-none rounded-lg btn mt-2">View Details</button>
</Link>
            </div>
        </div>
    );
};

export default SingleFeaturedJob;