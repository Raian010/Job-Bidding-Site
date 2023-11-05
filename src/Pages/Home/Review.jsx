import Rating from "react-rating-stars-component";

const Review = ({ review }) => {
  console.log(review);
  const { name, occupation, headline, description, rating, image } = review;
  return (
    <div className="shadow-xl bg-base-200 rounded-lg p-5">
      <div className="flex items-center">
        <img className="w-[70px] h-[80px] rounded" src={image} alt="" />
        <div className="ml-5">
          <h2 className="text-xl font-bold">{name}</h2>
          <h2 className="text-lg font-semibold">{occupation}</h2>
        </div>
      </div>
      <div className="space-y-3 mt-3">
        <p className="text-xl font-bold">{headline}</p>
        <p className="text-lg font-semibold">{description}</p>
        <Rating count={5} size={24} value={rating} edit={true} half={true} />
      </div>
    </div>
  );
};

export default Review;
