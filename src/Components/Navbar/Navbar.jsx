import { Link, NavLink } from "react-router-dom";
import { FaHome,FaBriefcase,FaUser,FaDollarSign,FaClock,FaRegistered  } from 'react-icons/fa';
import { useContext } from "react";
import { AuthContext } from "../../Provider/Authprovider";

const Navbar = () => {
   const {user,logout} = useContext(AuthContext);

   const handlelogOut = () => {
    logout()
    .then(result => {
      console.log(result);
    })
    .catch(error => console.log(error))
   }

   const links = <>
   <li className=" "><Link to="/"><FaHome></FaHome>Home</Link></li>
   <li className=""><Link to="/add"><FaBriefcase></FaBriefcase>Add job</Link></li>
   <li className=""><Link to=""><FaUser></FaUser>My posted jobs</Link></li>
   <li className=""><Link to=""><FaDollarSign></FaDollarSign>My Bids</Link></li>
   <li className=""><Link to="">
    <FaClock></FaClock>Bid Requests</Link></li>
   <li className=""><Link to="/register"><FaRegistered></FaRegistered>
    Register</Link></li>
   </>

    return (
        <div className="navbar rounded-lg flex shadow-xl items-center bg-base-200">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {links}
      </ul>
    </div>
    <div>
    <a className="btn btn-ghost normal-case text-xl">
         <span>
         <img className="w-[120px] font-bold" src="https://i.postimg.cc/9fHW6xz9/find-job-logo-icon-design-vector-22742492-1-removebg-preview.png" alt="" /> 
        </span>
        <span className="font-semibold">CareerNest</span>
    </a>
 
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end mr-10">
  {
            user ?
            <div className="">
              <div>
              <span className="font-bold">
              {
              user ?
               <p className="flex justify-center items-center">
                <span>
                  <img className={user.photoURL ? 'hidden md:block lg:h-[50px] rounded-full p-1' : ""} src={user ? user.photoURL : ""} alt="" />
                  </span>
                  <span className="mr-2 rounded-lg">{user.email}</span></p> : "" }
               </span>
               <Link to="/login"><button onClick={handlelogOut} className="btn btn-neutral ml-20 btn-sm">Logout</button></Link>
              </div>
              

               </div> :
            <NavLink to="/login"><button className="btn btn-primary">Login</button></NavLink>
            
          }
  </div>
</div>
    );
};

export default Navbar;