import React from 'react';
import { Link } from 'react-router-dom';
import { faLocationDot, faDollar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const AppliedJobDetails = ({ appliedJobDetails }) => {
    // console.log(details)
    const { company_logo, job_title, remoteOrOnSite, fulltimeOrPartTime, company_name, salary, location, id } = appliedJobDetails
    console.log(job_title)
    return (
        <div>

            <div style={{ border: '1px solid #E8E8E8' }} className="flex flex-col md:flex-row p-8 items-center md:justify-between justify-center gap-10 mb-4 ">
                <div className="flex flex-col md:flex-row  gap-10">
                    <div className='flex  items-center justify-center rounded-lg w-[200px] h-[200px]' style={{ backgroundColor: '#F4F4F4' }}>
                        <img src={company_logo} alt="" />

                    </div>
                    <div>
                        <h2 className='text-3xl font-bold'>{job_title}</h2>
                        <p style={{ color: '#757575' }} className='text-base mt-2 font-semibold'>{company_name}</p>
                        <div className="flex mt-2">
                            <button className=" btn-outlined">{fulltimeOrPartTime}</button>
                            <button className=" ml-2 btn-outlined">{remoteOrOnSite}</button>
                        </div>
                        <div className="flex mt-2">
                            <p style={{ color: '#757575' }} className='text-base font-semibold'> <FontAwesomeIcon icon={faLocationDot} />  {location}</p>
                            <p style={{ color: '#757575' }} className=' ml-4 text-base font-semibold'> <FontAwesomeIcon className="ml-2" icon={faDollar} /> Salary:{salary}</p>

                        </div>
                    </div>
                </div>
                <Link to={`/job/${id}`}><button style={{
                    background: 'linear-gradient(90deg, #7E90FE 0%, #9873FF 100%)'
                }} className='btn border-none'>View Details</button></Link>
            </div>
        </div>
    );
};

export default AppliedJobDetails;