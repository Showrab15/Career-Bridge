import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToDb } from '../../utilities/fakedb';
import { faLocationDot, faEnvelope, faDollar, faPhone , faBriefcase} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const JobDetails = () => {

// useState for job details which details user wants to know
    const [jobDetails, setJobDetails] = useState({});


// useParams hook for get the id of view details button
    const { jobId } = useParams();

    // useLoader for find the data
    const data = useLoaderData()

    // useEffect for these datas which user clicked for see..
    useEffect(() => {
        const foundedData = data.find(dt => dt.id == jobId)
        setJobDetails(foundedData)
    }, [])


    // destructuring data of jobDetails for show in UI

    const { id, company_name, company_logo, job_detail, job_responsibility, educational_requirements, experience, salary, job_title, phone, email, location, remoteOrOnSite, fulltimeOrPartTime } = jobDetails;


    // event handler with set local storage for apply button

    const handleApplyBtn = (id) => {
        addToDb(id)
    }



    return (
        <div>
            <h1 className="text-center font-bold mt-4 text-4xl">Job Details</h1>

            <div className="md:flex md:justify-around md:m-32  gap-48">

{/* job description */}
                <div className=" mt-2 md:w-[50%] ml-2 mr-2 md:ml-0 md:mr-0 ">
                    <p className="font-bold text-base"><span className=" text-black">Job Description</span> : <span style={{ color: '#757575' }}>{job_detail
                    }</span> </p>

                    <p className="mt-4 font-bold text-base"><span className=" text-black">Job Responsibility
                    </span> : <span style={{ color: '#757575' }}>{job_responsibility}</span> </p>

                    <p className="mt-4 font-bold text-base"><span className=" text-black mb-4">Educational Requirements
                    </span> :  <br /><span style={{ color: '#757575' }}>{educational_requirements}</span> </p>

                    <p className="mt-4 font-bold text-base" ><span className=" text-black mb-4">Experience</span> :  <br /><span style={{ color: '#757575' }}>{experience}</span> </p>

                </div>

{/* job details cart */}
                <div className="mt-4 mb-4 md:mt-0 md:mb-o ml-2 mr-2 md:ml-0 md:mr-0 ">

                    <div style={{
                        background: "linear-gradient(90deg, rgba(126, 144, 254, 0.1) 0%, rgba(152, 115, 255, 0.1) 100%)",
                     
                    }} className='w-full rounded-lg  p-8'>

                        <h2 className="font-bold text-base mb-4">Job Details  </h2>

                        <hr />

                        <div className="mt-8 mb-8 text-base ">

                            <p><span className="font-semibold "> <FontAwesomeIcon style={{ color: 'rgba(126, 144, 254, 1)' }} icon={faDollar} />  Salary : </span>  <span style={{ color: '#757575' }}>{salary}</span> </p>

                            <p className='mt-4'><span className="font-semibold  "><FontAwesomeIcon style={{ color: 'rgba(126, 144, 254, 1)' }} icon={faBriefcase} /> Job Title</span> : <span style={{ color: '#757575' }}> {job_title}</span> </p>

                        </div>

                        <h1 className="font-bold text-base mb-4">Contact Information</h1>

                        <div>

                            <hr />

                            <p className="mt-4"><span className="font-semibold "><FontAwesomeIcon style={{ color: 'rgba(126, 144, 254, 1)' }} icon={faPhone} />  Phone : </span> <span style={{ color: '#757575' }}>{phone}</span> </p>

                            <p className="mt-4"><span className="font-semibold "><FontAwesomeIcon style={{ color: 'rgba(126, 144, 254, 1)' }} icon={faEnvelope} /> Email : </span> <span style={{ color: '#757575' }}> {email}</span> </p>

                            <p className="mt-4"><span className="font-semibold "><FontAwesomeIcon style={{ color: 'rgba(126, 144, 254, 1)' }} icon={faLocationDot} /> Address : </span> <span style={{ color: '#757575' }}>{location}</span> </p>

                        </div>

                    </div>
                    
                    <button onClick={() => handleApplyBtn(id)} style={{ background: "linear-gradient(90deg, #7E90FE 0%, #9873FF 100%)" }} className="btn w-full border-none mt-4 rounded-lg ">Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;