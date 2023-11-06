import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/Authprovider";
import axios from "axios";
import PostedJob from "./postedJob";
import Swal from "sweetalert2";


const MypostedJobs = () => {
    const {user} = useContext(AuthContext);
    const [postedJobs,setPostedJobs] = useState([]);

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
            fetch(
              `http://localhost:5000/jobs/${_id}`,
              {
                method: "DELETE",
              }
            )
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

    const url = `http://localhost:5000/jobs?email=${user.email}`

    useEffect(() => {
         axios.get(url)
         .then(res => {
            console.log(res.data);
            setPostedJobs(res.data)
         })
    },[url])

    return (
        <div className="my-10">
            <h2>This is what i posted in last minute</h2>
            <h3>{postedJobs.length}</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                { postedJobs ? 
                    postedJobs.map(postedJob => <PostedJob key={postedJob._id} handleDelete={handleDelete} postedJob={postedJob}></PostedJob>) : <p>There is no data</p>
                }
            </div>
        </div>
    );
};

export default MypostedJobs;