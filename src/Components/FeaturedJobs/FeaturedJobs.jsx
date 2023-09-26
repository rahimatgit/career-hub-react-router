import { useEffect, useState } from "react";
import FeaturedJob from "../FeaturedJob/FeaturedJob";


const FeaturedJobs = () => {

    const [featuredJobs, setFeaturedJobs] = useState([]);
    const [dataLength, setDataLength] = useState(4);


    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setFeaturedJobs(data))
    }, [])

    return (
        <div>
            <div className="grid grid-cols-2 gap-10">
                {
                    featuredJobs.slice(0, dataLength).map(featuredJob => <FeaturedJob key={featuredJob.id} featuredJob={featuredJob}></FeaturedJob>)
                }
            </div>
            <div className={ dataLength === featuredJobs.length? 'hidden': 'flex justify-center mt-5'}>
                <button onClick={() => setDataLength(featuredJobs.length)} className="btn btn-primary">Show All</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;