import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/Authprovider";


const BidForm = () => {

    const {user} = useContext(AuthContext);

    const ownerData = useLoaderData();
    console.log(ownerData);
    const {email} = ownerData;

    const handleBid = e => {
        e.preventDefault();
        const form = e.target;
        const price = form.price.value;
        const deadline = form.deadline.value;
        const email =  user?.email
        const buyer = ownerData.email;

        const userBid = {price,deadline,email,buyer}
    }
    return (
        <div className="my-10 min-h-[80vh]">
        <h2 className="text-3xl font-bold text-center">
          Place Your <span className="text-blue-600">Bid</span>
        </h2>
        <form onSubmit={handleBid} className="mt-10 space-y-8 bg-gray-200 p-10">
          <input
            type="text"
            name="price"
            // defaultValue={user?.email}
            placeholder="Price"
            className="input input-bordered w-1/2"
          />
          <input
            type="date"
            name="deadline"
            // defaultValue={deadline}
            placeholder="Deadline"
            className="input input-bordered w-1/2"
          />
          
          <br />
          <input
            type="text"
            name="email"
            defaultValue={user?.email}
            placeholder="Email"
            className="input input-bordered w-1/2"
          />
          
          <input
            type="text"
            name="buyer"
            defaultValue={email}
            placeholder="Buyer Email"
            className="input input-bordered w-1/2"
          />
          <br />
          
  
          <br />
          <div className="flex justify-center">
            <input className="btn btn-neutral w-2/3" type="submit" value="Bid On The Project" />
          </div>
        </form>
      </div>
    );
};

export default BidForm;