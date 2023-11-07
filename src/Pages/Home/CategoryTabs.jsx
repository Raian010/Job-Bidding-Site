import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Skelton from "../../Components/Skelton/Skelton"

const CategoryTabs = () => {
  const [selectCategory, setSelectCategory] = useState("Web Development");
  const [categories, setCategories] = useState([]);
  const [isLoading,setIsLoading] = useState(true);
  useEffect(() => {
    fetch("https://assignment-react-server.vercel.app/jobs")
      .then((res) => res.json())
      .then((data) => setCategories(data));
      setIsLoading(false);
  }, []);

 

  return (
    <div>
      <h2 className="text-4xl text-center font-bold mb-10">
        Our <span className="text-blue-600">Category</span>
      </h2>
      <div className="tabs">
        {["Web Development", "Digital Marketing", "Graphic Design"].map(
          (category) => (
            <a
              key={category}
              className={`tab tab-lifted ${
                selectCategory === category ? "tab-active" : ""
              } text-xl font-semibold`}
              onClick={() => setSelectCategory(category)}
            >
              {category}
            </a>
          )
        )}
      </div>

      <div className="category-content mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {isLoading ? ( <Skelton/> )
        : (categories
          ? categories.map((item) => {
              if (selectCategory === item.category) {
                return (
                  <div key={item._id} className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                      <h2 className="card-title h-[52px] text-xl font-bold">
                        {item.job}
                      </h2>
                      <p className="font-medium">
                        Deadline: <span className="ml-2">{item.deadline}</span>
                      </p>
                      <p className="font-medium">
                        Price range:{" "}
                        <span className="ml-2">
                          {item.minimum}$-{item.maximum}$
                        </span>
                      </p>
                      <p className="font-medium h-[192px]">
                        {item.description}
                      </p>

                      <div className="card-actions justify-end">
                        <Link
                          to={`/details/${item._id}`}
                          className="btn btn-primary"
                        >
                          Bid Now
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              }
            })
          : "") }
      </div>
    </div>
  );
};

export default CategoryTabs;
