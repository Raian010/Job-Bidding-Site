import { useEffect, useState } from "react";

const MyBidPage = () => {
  const [bids, setBids] = useState([]);

  const [status, setStatus] = useState("pending");

  const [isLoading,setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://assignment-react-server.vercel.app/bids")
      .then((res) => res.json())
      .then((data) => setBids(data));
      setIsLoading(false)
  }, []);

  return (
    <div className="min-h-[80vh] mt-10">
      <h2 className="text-4xl text-center font-bold mb-10">
        My <span className="text-blue-600">Bid</span>
      </h2>
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
                <td className="font-medium">{status}</td>
                <td className="font-medium">Complete Button</td>
              </tr>
            )) : <p>There is no data</p>)}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBidPage;
