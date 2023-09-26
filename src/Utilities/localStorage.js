
const getStoredApplication = () => {
    const storedJobApplication = localStorage.getItem('job-applications');
    if(storedJobApplication){
        return JSON.parse(storedJobApplication);
    }
    else{
        return [];
    }
}


const saveJobApplication = id => {
    const storedJobApplications = getStoredApplication();
    const exist = storedJobApplications.find(jobId => jobId === id);
    if(!exist){
        storedJobApplications.push(id);
        localStorage.setItem('job-applications', JSON.stringify(storedJobApplications));
    }
}

export {saveJobApplication, getStoredApplication}