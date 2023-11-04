import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
           <div className="flex md:w-[750px] md:h-[600px] relative justify-center">
           <img src="https://i.postimg.cc/5NMFxnrn/shutterstock-479042983.jpg" alt="" />
           <Link className="btn absolute bottom-0 top-1 btn-warning">Go to Home</Link>
           </div>
         
        </div>
    );
};

export default ErrorPage;