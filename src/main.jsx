import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import JobCategory from './components/JobCategory/JobCategory';
import FeaturedJobs from './components/FeaturedJobs/FeaturedJobs';
import JobDetails from './components/JobDetails/JobDetails';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import Blog from './components/Blog/Blog';
import Statistics from './components/Statistics/Statistics';
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ErrorPage from './components/ErrorPage/ErrorPage';
 
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
  {
    path: '/featuredjobs',
    element: <FeaturedJobs></FeaturedJobs>
  
  }, 
  { path: '/job/:jobId', 
  element: <JobDetails></JobDetails>,
   loader: ()=> fetch('/featuredjob.json')
  },
  {
  path: 'appliedjobs',
  element: <AppliedJobs></AppliedJobs>,
  loader : ()=> fetch('/featuredjob.json')
  },
  {
  path: 'blogs',
  element: <Blog></Blog>
  },
  {
    path: 'statistics',
    element: <Statistics></Statistics>
  }
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
    </React.StrictMode>,
)
