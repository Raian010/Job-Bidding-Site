import { Outlet } from "react-router-dom";

const Main = () => {
    return (
        <div>
           <h2>This is main page</h2>
           <Outlet></Outlet> 
        </div>
    );
};

export default Main;