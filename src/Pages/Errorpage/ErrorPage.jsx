import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
           <div className="flex relative items-center justify-center">
          
          <img className="md:w-[750px] md:h-[600px]" src="https://i.postimg.cc/5NMFxnrn/shutterstock-479042983.jpg" alt="" />
           <Link className="btn absolute left-8 bottom-28 md:left-36 md:bottom-40 lg:left-96 lg:bottom-52  btn-warning">Go to Home</Link>
          
           </div>
         
        </div>
    );
};

export default ErrorPage;