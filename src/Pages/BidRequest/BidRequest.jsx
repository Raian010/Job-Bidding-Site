import { useContext, useEffect } from "react";
import { useState } from "react";

// import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/Authprovider";


const BidRequest = () => {

  const {user} = useContext(AuthContext);
  console.log(user);

  // const datas = useLoaderData();
  // const data = datas[0];
  // const { buyer } = data;
  // console.log(data);

  const [ownerAddedJobs, setOwnerAddedJobs] = useState([]);
  
  const [isLoading,setIsLoading] = useState(true);

  const url = `https://assignment-react-server.vercel.app/bids`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const userBids = data.filter(bid => bid.buyer === user?.email);
        setOwnerAddedJobs(userBids);
        console.log(userBids);
        setIsLoading(false);
      });
  }, [url,user]);


  const handleAccept = (_id) => {
    fetch(`https://assignment-react-server.vercel.app/bids/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "in progress" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          
          const remaining = ownerAddedJobs.filter((job) => job._id !== _id);
          const updated = ownerAddedJobs.find((job) => job._id == _id);
          updated.status = "in progress";
          const newUpdated = [updated, ...remaining];
          setOwnerAddedJobs(newUpdated);
        }
      });
  };

  const handleReject = (_id) => {
    fetch(`https://assignment-react-server.vercel.app/bids/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "rejected" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          
          const remaining = ownerAddedJobs.filter((job) => job._id !== _id);
          const updated = ownerAddedJobs.find((job) => job._id == _id);
          updated.status = "rejected";
          const newUpdated = [updated, ...remaining];
          setOwnerAddedJobs(newUpdated);
        }
      });
  };

  return (
    <div className="min-h-screen mt-10">
      <h2 className="text-4xl text-center font-bold mb-10">
        Bid <span className="text-blue-600">Request</span>
      </h2>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th className="text-xl text-black font-bold">Job Title</th>
              <th className="text-xl text-black font-bold">Email</th>
              <th className="text-xl text-black font-bold">Deadline</th>
              <th className="text-xl text-black font-bold">Price</th>
              <th className="text-xl text-black font-bold">Status</th>
              <th className="text-xl text-black font-bold">Accept</th>
              <th className="text-xl text-black font-bold">Reject</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (<span className="loading loading-infinity loading-lg"></span>) :(ownerAddedJobs ? ownerAddedJobs.map((job) => (
              <tr key={job._id}>
                <td className="font-medium">{job.job}</td>
                <td className="font-medium">{job.email}</td>
                <td className="font-medium">{job.deadline}</td>
                <td className="font-medium">{job.price}</td>
                <td className="font-medium">{job.status === 'in progress' ? <span className="text-xl font-bold text-blue-500">in progress</span> : job.status === "completed" ? (<span className="text-xl font-bold text-green-500">completed</span>) : job.status === "rejected" ? (<span className="text-xl font-bold text-red-500">rejected</span>) : "pending"}</td>
                <td className="font-medium">
                {job.status === 'in progress' ? (
    <progress className="progress progress-success w-56" value={50} max="100"></progress>
  ) : job.status === 'completed' ? (<progress className="progress progress-success w-56" value={100} max="100"></progress>) : job.status === 'rejected' ? <progress className="progress progress-success w-56" value={0} max="100"></progress> :  (
    <button onClick={() => handleAccept(job._id)} className="btn bg-green-500">Accept</button>
  )}
                </td>
                <td className="font-medium">
                  {job.status === 'in progress' ? (
    <span className="text-4xl font-bold text-red-500">X</span>
  ) : job.status === 'completed' ? (<span className="text-4xl font-bold text-red-500">X</span>) : job.status === 'rejected' ? <span className="text-4xl font-bold text-red-500">X</span> :  (
    <button onClick={() => handleReject(job._id)} className="btn bg-red-500">Reject</button>
  )}
                </td>
              </tr>
            )) : <p>There is no data</p>)}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BidRequest;
