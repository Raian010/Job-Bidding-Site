import { useState } from "react";
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/Authprovider";
import Swal from "sweetalert2";

const Update = () => {
  const { user } = useContext(AuthContext);

  const data = useLoaderData();
  console.log(data);

  const { _id, job, deadline, maximum, minimum, description } = data;

  const [selected, setSelected] = useState("");

  const handleUpdate = (e) => {
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

    fetch(`https://assignment-react-server.vercel.app/jobs/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newJob),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire("Success!", "Updated successfully", "success");
        }
      });
  };

  return (
    <div className="my-10">
      <h2 className="text-3xl font-bold text-center">
        Add <span className="text-blue-600">Jobs</span>
      </h2>
      <form
        onSubmit={handleUpdate}
        className="mt-10 space-y-8 bg-gray-200 p-10"
      >
        <input
          type="text"
          name="email"
          defaultValue={user?.email}
          placeholder="Email"
          className="input input-bordered w-1/2"
        />
        <input
          type="text"
          name="job"
          defaultValue={job}
          placeholder="Job Title"
          className="input input-bordered w-1/2"
        />
        <br />
        <input
          type="date"
          name="deadline"
          defaultValue={deadline}
          placeholder="Deadline"
          className="input input-bordered w-1/2"
        />
        <input
          type="text"
          name="description"
          defaultValue={description}
          placeholder="Description"
          className="input input-bordered w-1/2"
        />
        <br />
        <input
          type="text"
          name="minimum"
          defaultValue={minimum}
          placeholder="Minimum Price"
          className="input input-bordered w-1/2"
        />

        <input
          type="text"
          name="maximum"
          defaultValue={maximum}
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
            value="Update"
          />
        </div>
      </form>
    </div>
  );
};

export default Update;
