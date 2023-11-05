import { useEffect, useState } from "react";
import Review from "./Review";


const Reviews = () => {
    const [reviews,setReviews] = useState([]);
    useEffect(() => {
        fetch('reviews.json')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])
    return (
        <div className="my-10">
          <h2 className="text-center text-2xl md:text-4xl mb-5 font-bold">Our <span className="text-blue-500">Clients</span></h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {
                reviews.map(review => <Review key={review.id} review={review}></Review>)
            }
           </div>
        </div>
    );
};

export default Reviews;