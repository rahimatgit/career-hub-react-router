import { AiOutlineDollarCircle } from 'react-icons/ai'
import { Link } from 'react-router-dom';


const FeaturedJob = ({ featuredJob }) => {

    const { image, job_title, company, job_type, salary, id } = featuredJob;

    

    return (
        <div>
            <div className="card bg-base-100 shadow-xl flex flex-col items-start">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-left text-left">
                    <h2 className="card-title">{company}</h2>
                    <p>{job_title}</p>
                    <p>{job_type}</p>
                    <p className='flex gap-2 items-center'><AiOutlineDollarCircle></AiOutlineDollarCircle>Salary: {salary}</p>
                    <div className="card-actions">
                        <Link to={`/details/${id}`}>
                            <button className="btn btn-primary">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedJob;