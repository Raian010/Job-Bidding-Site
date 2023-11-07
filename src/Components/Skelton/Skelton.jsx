import Skeleton from "react-loading-skeleton";


const Skelton = () => {
    return (
        <div className="skeleton-loader">
      <Skeleton count={3} height={50} />
    </div>
    );
};

export default Skelton;