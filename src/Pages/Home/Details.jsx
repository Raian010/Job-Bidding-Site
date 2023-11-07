import { FaBriefcase } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import animation from "../../assets/details-animation.json"
import Lottie from "lottie-react";
import { useContext } from "react";
import { AuthContext } from "../../Provider/Authprovider";


const Details = () => {

  const {user} = useContext(AuthContext);

    const jobDetails = useLoaderData();
    console.log(jobDetails);
    const {_id,job,email,description,deadline,minimum,maximum} = jobDetails;

    const isOwner = user?.email === email;
    return (
        <div className="flex flex-col-reverse md:flex-row items-center justify-center min-h-[90vh]">
            <div>
            <Lottie className="h-[500px]" animationData={animation}></Lottie>
            </div>
            <div className="card md:w-96 my-10 bg-white shadow-xl md:mr-5 lg:mr-0">
  <div className="card-body">
    <h2 className="card-title text-xl font-bold h-[52px]"><FaBriefcase></FaBriefcase>{job}</h2>
    <p className="font-medium">Deadline: <span>{deadline}</span></p>
    <p className="font-medium">Price Range: {minimum}$-{maximum}</p>
    <p className="h-[192px] font-medium">{description}</p>
    <div className="card-actions">
    {isOwner ? (
             
              <button className="btn w-full" disabled>
                You posted the job.
              </button>
            ) : (
             
              <Link to={`/bidform/${_id}`} className="btn w-full btn-primary">
                Place your bid
              </Link>
            )}
    </div>
  </div>
</div>
        </div>
    );
};

export default Details;