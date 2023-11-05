import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/Authprovider";
import axios from "axios";


const MypostedJobs = () => {
    const {user} = useContext(AuthContext);
    const [postedJobs,setPostedJobs] = useState([]);

    const url = `http://localhost:5000/jobs?email=${user.email}`

    useEffect(() => {
         axios.get(url)
         .then(res => {
            console.log(res.data);
            setPostedJobs(res.data)
         })
    },[url])

    return (
        <div>
            <h2>This is what i posted in last minute</h2>
            <h3>{postedJobs.length}</h3>
        </div>
    );
};

export default MypostedJobs;