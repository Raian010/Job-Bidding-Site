import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/Authprovider";
import axios from "axios";
import Swal from "sweetalert2";
import { useState } from "react";
import { useEffect } from "react";

const BidForm = () => {
  const { user } = useContext(AuthContext);

  const ownerData = useLoaderData();
  console.log(ownerData);
  const { email, deadline } = ownerData;

  const navigate = useNavigate();

  const [isDeadlineCrossed, setIsDeadlineCrossed] = useState(false);
  useEffect(() => {
    const deadlineDate = new Date(deadline);
    const currentDate = new Date();
    if (deadlineDate < currentDate) {
      setIsDeadlineCrossed(true);
    }
  }, [deadline]);

  const handleBid = (e) => {
    e.preventDefault();


    const form = e.target;
    const price = form.price.value;
    const deadline = ownerData.deadline;
    const email = user?.email;
    const buyer = ownerData.email;
    const job = ownerData.job;

    form.reset();

    const userBid = { job, price, deadline, email, buyer };
    axios
      .post("https://assignment-react-server.vercel.app/bids", userBid)
      .then((res) => {
        const result = res.data;
        console.log(result);
        if (result.insertedId) {
          Swal.fire("Success!", "You successfully added a job", "success");
        }
        navigate("/mybid");
      });
  };
  return (
    <div className="my-10 min-h-[80vh]">
      <h2 className="text-3xl font-bold text-center">
        Place Your <span className="text-blue-600">Bid</span>
      </h2>
      <form onSubmit={handleBid} className="mt-10 space-y-8 bg-gray-200 p-10">
        <input
          type="text"
          name="price"
          placeholder="Price"
          className="input input-bordered w-1/2"
        />
        <input
          type="date"
          name="deadline"
          defaultValue={deadline}
          placeholder="Deadline"
          className="input input-bordered w-1/2"
        />

        <br />
        <input
          type="text"
          name="email"
          disabled
          defaultValue={user?.email}
          placeholder="Email"
          className="input input-bordered w-1/2"
        />

        <input
          type="text"
          name="buyer"
          disabled
          defaultValue={email}
          placeholder="Buyer Email"
          className="input input-bordered w-1/2"
        />
        <br />

        <br />
        <div className="flex justify-center">
          <button
            className={`btn btn-neutral w-2/3`}
            type="submit"
            disabled={isDeadlineCrossed}
          >
            {isDeadlineCrossed ? "Deadline Crossed" : "Bid On The Project"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default BidForm;
