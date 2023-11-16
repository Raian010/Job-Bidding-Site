import Lottie from "lottie-react";
import animationData from "../../assets/login-animation2.json"
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/Authprovider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { FaGoogle } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const {login,googleSIgn} = useContext(AuthContext);
  const [signinError,setSigninError] = useState(null);
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location);

    const googleSignin = () => {
      googleSIgn()
      .then(result => {
        console.log(result.user);
      })
      .catch(error => {
        console.log(error);
      })
}

   const handleSignIn = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    setSigninError("");

        login(email,password)
        .then(result => {
            console.log(result.user)
            Swal.fire(
              'Success!',
              'Your login successful',
              'success'
            )
            navigate(location?.state ? location.state : "/");
        })
        .catch(error => {
            console.log(error.message);
            setSigninError(error.message)
        })


   }
    return (
      <div className="my-10">
        <Helmet>
                <title>CareerNest || Login</title>
            </Helmet>
      <div className="min-h-screen flex flex-col-reverse lg:flex-row justify-center gap-10 items-center">
        <Lottie className="h-[500px]" animationData={animationData}></Lottie>

        <div className="shadow-lg rounded-lg w-[400px]">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold text-center"><span className="text-blue-600">Login </span>Now!</h2>
              <div className="card mb-5 bg-base-100">
                <form onSubmit={handleSignIn} className="card-body">
                  
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      placeholder="email"
                      name="email"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      type="password"
                      placeholder="password"
                      name="password"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control mt-4">
                    <input
                      type="submit"
                      value="Login"
                      className="btn btn-primary"
                    />
                  </div>
                  <div className="mt-2">
            <p className="text-center">
              <span className="mr-2">Do not have an account?</span>
              <Link className="text-blue-800 text-lg font-bold" to="/register">
                Register
              </Link>
            </p>
          </div>
          <p className="m-2 text-center">OR</p>
          <div>
            <p className="text-center flex items-center justify-center">
              <span className="mr-2">You can also sign in by</span>
              <span>
                <button onClick={googleSignin} className="text-xl text-blue-600 font-bold rounded px-2 py-1 ">
                 <FaGoogle></FaGoogle>
                </button>
              </span>
            </p>
          </div>
          <p className="text-red-500 text-center font-semibold">
              {signinError}
            </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Login;