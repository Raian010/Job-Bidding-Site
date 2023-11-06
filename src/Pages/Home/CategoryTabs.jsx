// import { useEffect } from "react";
// import { useState } from "react";


const CategoryTabs = () => {

    // const [categories,setCategories] = useState([]);
    // useEffect(() => {
    //     fetch("http://localhost:5000/jobs")
    //     .then(res => res.json())
    //     .then(data => setCategories(data))
    // },[])

    return (
        <div>
            <h2>This is tabs page </h2>
            <div className="tabs">
  <a className="tab tab-lifted">Tab 1</a> 
  <a className="tab tab-lifted tab-active">Tab 2</a> 
  <a className="tab tab-lifted">Tab 3</a>
</div>
        </div>
    );
};

export default CategoryTabs;