import { useEffect } from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const BidRequest = () => {
  const datas = useLoaderData();
  const data = datas[0];
  const { buyer } = data;
  console.log(data);

  const [ownerAddedJobs, setOwnerAddedJobs] = useState([]);
  
  const [isLoading,setIsLoading] = useState(true);

  const url = `https://assignment-react-server.vercel.app/bids?email=${buyer}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOwnerAddedJobs(data));
      setIsLoading(false)
  }, [url]);

  const [status, setStatus] = useState("pending");
  // const [visible,setVisible] = useState(true);

  const handleStatus = (_id) => {
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

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://assignment-react-server.vercel.app/bids/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Rejected!", "This bid has been rejected.", "success");
              const remaining = ownerAddedJobs.filter((cart) => cart._id !== _id);
              setOwnerAddedJobs(remaining);
            }
          });
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
                <td className="font-medium">{job.status === 'in progress' ? <span className="text-xl font-bold text-blue-500">in progress</span> : "pending"}</td>
                <td className="font-medium">
                {job.status === 'in progress' ? (
    <span className="loading loading-infinity loading-lg"></span>
  ) : (
    <button onClick={() => handleStatus(job._id)} className="btn bg-green-500">Accept</button>
  )}
                </td>
                <td className="font-medium">
                  {job.status === 'in progress' ? (
    <span className="loading loading-infinity loading-lg"></span>
  ) : (
    <button onClick={() => handleDelete(job._id)} className="btn bg-red-500">Reject</button>
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
