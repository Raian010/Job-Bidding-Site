import { useContext } from "react";
import { AuthContext } from "../Provider/Authprovider";
import { Navigate, useLocation } from "react-router-dom";
import Skelton from "../Components/Skelton/Skelton";


const PrivateRoute = ({children}) => {
    const {user,isLoading} = useContext(AuthContext);
    const location = useLocation();


    if(isLoading){
        return <span className="loading loading-spinner loading-lg"></span>;
    }
    if(user?.email){
        return children;
    }
    return  <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivateRoute;