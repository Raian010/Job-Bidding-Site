import { useEffect, useState } from "react";

const MyBidPage = () => {

 
    const [bids,setBids] = useState([]);
    console.log(bids);

    useEffect(() => {
      fetch('http://localhost:5000/bids')
      .then(res => res.json())
      .then(data => setBids(data))
    },[])

    return (
        <div className="min-h-[80vh] mt-10">
            <h2>This is my Bid Page{bids.length}</h2>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            
            <div>
              <div className="font-bold">Hart Hagerty</div>
              <div className="text-sm opacity-50">United States</div>
            </div>
          </div>
        </td>
        <td>
          Zemlak, Daniel and Leannon
          <br/>
          <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
        </td>
        <td>Purple</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
      
    </tbody>
   
    
  </table>
</div>
        </div>
    );
};

export default MyBidPage;