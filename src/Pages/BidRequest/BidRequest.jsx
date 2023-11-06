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
            <h2>This is bid request page
                There is {ownerAddedJobs.length} jobs
            </h2>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
       
        <th>Job Title</th>
        <th>Email</th>
        <th>Deadline</th>
        <th>Price</th>
        <th>status</th>
        <th>Accept</th>
        <th>Reject</th>
      </tr>
    </thead>
    <tbody>
      {
        ownerAddedJobs.map(ownerAddedJob => <tr key={ownerAddedJob._id}>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <td>
              <div className="flex items-center space-x-3">
                
                <div>
                  <div className="font-bold">{ownerAddedJob.job}</div>
                  <div className="text-sm opacity-50">United States</div>
                </div>
              </div>
            </td>
            <td>
              Zemlak, Daniel and Leannon
              <br/>
              <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
            </td>
            <td>Purple</td>
            <th>
              <button className="btn btn-ghost btn-xs">details</button>
            </th>
          </tr>)
      }
      
    </tbody>
   
    
  </table>
</div>
        </div>
    );
};

export default BidRequest;