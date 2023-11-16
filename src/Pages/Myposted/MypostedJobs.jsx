import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/Authprovider";
import axios from "axios";
import PostedJob from "./postedJob";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const MypostedJobs = () => {
  const { user } = useContext(AuthContext);
  const [postedJobs, setPostedJobs] = useState([]);

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
        fetch(`https://assignment-react-server.vercel.app/jobs/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remaining = postedJobs.filter((cart) => cart._id !== _id);
              setPostedJobs(remaining);
            }
          });
      }
    });
  };

  const [isLoading,setIsLoading] = useState(true);

  const url = `https://assignment-react-server.vercel.app/jobs?email=${user.email}`;

  useEffect(() => {
    axios.get(url).then((res) => {
      console.log(res.data);
      setPostedJobs(res.data);
      setIsLoading(false)
    });
  }, [url]);

  return (
    <div className="my-10 min-h-screen">
      <Helmet>
                <title>CareerNest || My Posted</title>
            </Helmet>
        <h2 className="text-4xl text-center font-bold mb-10">
        My Posted <span className="text-blue-600">Jobs</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        { isLoading ? (<span className="loading loading-infinity loading-lg"></span>) : (postedJobs ? 
          postedJobs.map((postedJob) => (
            <PostedJob
              key={postedJob._id}
              handleDelete={handleDelete}
              postedJob={postedJob}
            ></PostedJob>
          ))
         : 
          <p>There is no data</p>)
        }
      </div>
    </div>
  );
};

export default MypostedJobs;
