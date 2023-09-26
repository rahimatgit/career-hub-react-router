import { useLoaderData } from "react-router-dom";
import { getStoredApplication } from "../../Utilities/localStorage";
import { useEffect, useState } from "react";


const AppliedJobs = () => {
    const [appliedJobs, setAppliedJobs] = useState([]);
    const [showJobs, setShowJobs] = useState([]);
    const jobs = useLoaderData();

    useEffect(() => {

        const storedJobIds = getStoredApplication();

        if (jobs.length > 0) {

            const applied = [];

            for (const id of storedJobIds) {
                const job = jobs.find(job => job.id === id);
                if (job) {
                    applied.push(job);
                }
            }
            setAppliedJobs(applied);
            setShowJobs(applied);
        }
    }, [])


    const handleJobsFilter = filter => {
        if(filter === 'all'){
            setShowJobs(appliedJobs);
        }
        else if(filter === 'remote'){
            const remoteJobs = appliedJobs.filter(job => job.job_type === "Remote");
            setShowJobs(remoteJobs);
        }
        else if(filter === 'onsite'){
            const onsiteJobs = appliedJobs.filter(job => job.job_type === "Onsite");
            setShowJobs(onsiteJobs);
        }
    }

    return (
        <div>
            <h2>Applied jobs: {appliedJobs.length} </h2>
            <details className="dropdown mb-32">
                <summary className="m-1 btn">Job Type</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li onClick={() => handleJobsFilter('remote')}><a>Remote</a></li>
                    <li onClick={() => handleJobsFilter('onsite')}><a>Onsite</a></li>
                    <li onClick={() => handleJobsFilter('all')}><a>All</a></li>
                </ul>
            </details>
            {
                showJobs.map(job => <div key={job.id}>
                    <p>Company: {job.company} </p>
                    <p>Title: {job.job_title} </p>
                </div>)
            }
        </div>
    );
};

export default AppliedJobs;