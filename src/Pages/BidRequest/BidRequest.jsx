import { useEffect } from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";


const BidRequest = () => {

    const datas = useLoaderData();
    const data = datas[0];
    const {buyer} = data;
    console.log(data);

    const [ownerAddedJobs,setOwnerAddedJobs] = useState([]);

    const url = `http://localhost:5000/bids?email=${buyer}`
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setOwnerAddedJobs(data))
    },[url])

    return (
      <div className="min-h-[80vh] mt-10">
      <h2>This is my Bid Page {ownerAddedJobs.length}</h2>
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
            {ownerAddedJobs.map(job => (
              <tr key={job._id}>
                <td className="font-medium">
                  {job.job}
                  
                </td>
                <td className="font-medium">{job.email}</td>
                <td className="font-medium">
                  {job.deadline}
                </td>
                <td className="font-medium">
                  {job.price}
                </td>
                <td className="font-medium">pending</td>
                <td className="font-medium"><button className="btn bg-green-500">Accept</button></td>
                <td className="font-medium"><button className="btn bg-red-500">Reject</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default BidRequest;