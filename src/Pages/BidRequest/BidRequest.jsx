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

    const [status,setStatus] = useState("pending");
    // const [visible,setVisible] = useState(true); 

     const handleStatus = (_id) => {
    fetch(
      `http://localhost:5000/bids/${_id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ status: "confirm" }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
        
          // setStatus("in progress");
          // setVisible(false);
          const remaining = ownerAddedJobs.filter((job) => job._id !== _id);
          const updated = ownerAddedJobs.find((job) => job._id == _id);
          updated.status = "confirm";
          const newUpdated = [updated, ...remaining];
          setOwnerAddedJobs(newUpdated);
        }
      });
  };


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
                <td className="font-medium">{status}</td>
                <td className="font-medium"><button onClick={() => handleStatus(job._id)}>Accept</button></td>
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