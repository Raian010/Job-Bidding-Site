import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/Authprovider";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Addjobs = () => {
  const [selected, setSelected] = useState("");

  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = user?.email;
    const job = form.job.value;
    const deadline = form.deadline.value;
    const description = form.description.value;
    const minimum = form.minimum.value;
    const maximum = form.maximum.value;
    const category = selected;

    form.reset();

    const newJob = {
      email,
      job,
      deadline,
      description,
      minimum,
      maximum,
      category,
    };
    console.log(newJob);
    axios
      .post("https://assignment-react-server.vercel.app/jobs", newJob)
      .then((res) => {
        const result = res.data;
        console.log(result);
        if (result.insertedId) {
          Swal.fire("Success!", "You successfully added a job", "success");
        }
        navigate("/posted");
      });
  };
  return (
    <div className="my-10">
      <Helmet>
                <title>CareerNest || Add Jobs</title>
            </Helmet>
      <h2 className="text-3xl font-bold text-center">
        Add <span className="text-blue-600">Jobs</span>
      </h2>
      <form onSubmit={handleForm} className="mt-10 space-y-8 bg-gray-200 p-10">
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
          name="job"
          placeholder="Job Title"
          className="input input-bordered w-1/2"
        />
        <br />
        <input
          type="date"
          name="deadline"
          placeholder="Deadline"
          className="input input-bordered w-1/2"
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          className="input input-bordered w-1/2"
        />
        <br />
        <input
          type="text"
          name="minimum"
          placeholder="Minimum Price"
          className="input input-bordered w-1/2"
        />

        <input
          type="text"
          name="maximum"
          placeholder="Maximum Price"
          className="input input-bordered w-1/2"
        />

        <br />
        <details className="dropdown w-1/2">
          <summary className="m-1 btn">Category</summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-1/2">
            <li>
              <a onClick={() => setSelected("Web Development")}>
                Web Development
              </a>
            </li>
            <li>
              <a onClick={() => setSelected("Digital Marketing")}>
                Digital Marketing
              </a>
            </li>
            <li>
              <a onClick={() => setSelected("Graphic Design")}>
                Graphic Design
              </a>
            </li>
          </ul>
        </details>
        <div className="flex justify-center">
          <input
            className="btn btn-neutral w-2/3"
            type="submit"
            value="Add Job"
          />
        </div>
      </form>
    </div>
  );
};

export default Addjobs;
