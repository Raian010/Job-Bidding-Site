import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/Authprovider";
import { Helmet } from "react-helmet-async";


const MyBidPage = () => {
  const [bids, setBids] = useState([]);
  console.log(bids);

  const {user} = useContext(AuthContext);

  

  const [isLoading,setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://assignment-react-server.vercel.app/bids/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setBids(data));
      setIsLoading(false)
  }, [user?.email]);

  const handleStatus = (_id) => {
    fetch(`https://assignment-react-server.vercel.app/bids/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "completed" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          
          const remaining = bids.filter((job) => job._id !== _id);
          const updated = bids.find((job) => job._id == _id);
          updated.status = "completed";
          const newUpdated = [updated, ...remaining];
          setBids(newUpdated);
        }
      });
  };

  return (
    <div className="min-h-screen mt-10">
      <Helmet>
                <title>CareerNest || MyBids</title>
            </Helmet>
      <h2 className="text-4xl text-center font-bold mb-10">
        My <span className="text-blue-600">Bid</span>
      </h2>
      <h2 className="text-2xl mb-3 ml-3 font-bold">Total Bids: {bids.length}</h2>
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
            {isLoading ? (<span className="loading loading-infinity loading-lg"></span>) :(bids ? bids.map((bid) => (
              <tr key={bid._id}>
                <td className="font-medium">{bid.job}</td>
                <td className="font-medium">{bid.email}</td>
                <td className="font-medium">{bid.deadline}</td>
                <td className="font-medium">{bid.status === 'in progress' ? <span className="text-xl font-bold text-blue-500">in progress</span> : bid.status === "completed" ? (<span className="text-xl font-bold text-green-500">completed</span>) : bid.status === "rejected" ? (<span className="text-xl font-bold text-red-500">rejected</span>) : "pending"}</td>
                <td className="font-medium">
  {bid.status === 'in progress' ? (
    <button onClick={() => handleStatus(bid._id)} className={`btn btn-primary`}>Complete</button>
  ) : (
    <button className={`btn btn-primary ${bid.status === 'completed' ? "hidden" : "block"}`} disabled>Complete</button>
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

export default MyBidPage;
