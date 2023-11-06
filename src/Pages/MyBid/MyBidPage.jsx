import { useEffect, useState } from "react";

const MyBidPage = () => {
  const [bids, setBids] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/bids')
      .then(res => res.json())
      .then(data => setBids(data))
  }, []);

  return (
    <div className="min-h-[80vh] mt-10">
      <h2>This is my Bid Page {bids.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th className="text-xl text-black font-bold">Job Title</th>
              <th className="text-xl text-black font-bold">Email</th>
              <th className="text-xl text-black font-bold">Deadline</th>
              <th className="text-xl text-black font-bold">Status</th>
              <th className="text-xl text-black font-bold">Complete</th>
            </tr>
          </thead>
          <tbody>
            {bids.map(bid => (
              <tr key={bid._id}>
                <td className="font-medium">
                  {bid.job}
                  
                </td>
                <td className="font-medium">{bid.email}</td>
                <td className="font-medium">
                  {bid.deadline}
                </td>
                <td className="font-medium">pending</td>
                <td className="font-medium">Complete Button</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBidPage;