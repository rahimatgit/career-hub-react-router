import {  useLoaderData, useParams } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import { saveJobApplication } from "../../Utilities/localStorage";

const JobDetails = () => {

    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);


    const applyHandler = () => {
        saveJobApplication(idInt);
        toast.success('Successfully Applied');
    }

    return (
        <div>
            <p>Company: {job.company} </p>
            <h2>Job Details: {job.job_description} </h2>
            <button onClick={() => applyHandler()} className="btn btn-primary">Apply</button>
            <Toaster />
        </div>
    );
};

export default JobDetails;