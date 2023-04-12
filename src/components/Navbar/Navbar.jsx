import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <div className='my-container '>
            <div className='relative flex items-center justify-between'>
                <Link
                    to='/'
                    aria-label='HeroDam'
                    title='HeroDam'
                    className='inline-flex items-center'
                >
                    <div className='flex items-center justify-center '>
                        <h1 className="text-2xl font-bold">logo</h1>
                    </div>

                </Link>
                <ul className='items-center text-base font-medium hidden space-x-8 lg:flex'>
                    <li>
                        <NavLink
                            to='/'
                            aria-label='Home'
                            title='Home'
                            className={({ isActive }) => (isActive ? 'active' : 'default')}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/statistics'
                            aria-label='statistics'
                            title='statistics'
                            className={({ isActive }) => (isActive ? 'active' : 'default')}
                        >
                            Statistics
                        </NavLink>
                    </li>
                    <li>
                        <Link to='appliedjobs' aria-label='appliedjobs' title='appliedjobs'>
                            Applied Jobs
                        </Link>
                    </li>


                    <li>
                        <NavLink
                            to='blogs'
                            aria-label='blogs'
                            title='blogs'
                            className={({ isActive }) => (isActive ? 'active' : 'default')}
                        >
                            Blogs
                        </NavLink>
                    </li>
                    <li>
                    </li>
                </ul>
                <div>                   <button style={{background: 'linear-gradient(90deg, #7E90FE 0%, #9873FF 100%)'}} className=' hidden border-none btn lg:block  text-white text-base bg-sky-500 rounded-lg'>Start Applying</button>
                </div>
                <div className='lg:hidden'>
                    <button
                        aria-label='Open Menu'
                        title='Open Menu'
                        className='p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50'
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <svg className='w-5 text-gray-600' viewBox='0 0 24 24'>
                            <path
                                fill='currentColor'
                                d='M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z'
                            />
                            <path
                                fill='currentColor'
                                d='M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z'
                            />
                            <path
                                fill='currentColor'
                                d='M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z'
                            />
                        </svg>
                    </button>
                    {isMenuOpen && (
                        <div className='absolute z-10 top-0 left-0 w-full'>
                            <div className='p-5 bg-white border rounded shadow-sm'>
                                <div className='flex items-center justify-between mb-4'>

                                <h1 className="text-2xl font-bold">logo</h1>
                                                                    <div>
                                        <Link
                                            to='/'
                                            aria-label='HeroDam'
                                            title='HeroDam'
                                            className='inline-flex items-center'
                                        >
                                            <div className='flex items-center justify-center '>
                                                <img src="https://ibb.co/JKBmD8g" alt="" />
                                            </div>

                                        </Link>
                                    </div>
                                    <div>
                                        <button
                                            aria-label='Close Menu'
                                            title='Close Menu'
                                            className='p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <svg className='w-5 text-gray-600' viewBox='0 0 24 24'>
                                                <path
                                                    fill='currentColor'
                                                    d='M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z'
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <nav>
                                    <ul className='space-y-4'>
                                        <li>
                                            <Link
                                                to='/'
                                                aria-label='home'
                                                title='home'
                                                className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                                            >
                                                Home
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to='/statistics'
                                                aria-label='statistics'
                                                title='statistics'
                                                className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                                            >
                                                Statistics
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to='appliedjobs'
                                                aria-label='appliedjobs'
                                                title='appliedjobs'
                                                className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                                            >
                                                Applied Jobs
                                            </Link>
                                        </li>


                                        <li>
                                            <Link
                                                to='/blogs'
                                                aria-label='blogs'
                                                title='blogs'
                                                className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                                            >
                                                Blogs
                                            </Link>
                                        </li>



                                    </ul>
                                    <div>
                                        <button className='px-4 py-4  text-white text-base bg-sky-500 rounded-lg'>Star Applying</button>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;