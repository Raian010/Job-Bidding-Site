import Lottie from "lottie-react";
import animationData from "../../assets/login-animation.json"

const Login = () => {
    return (
        <div className="min-h-screen flex items-center">
            <Lottie className="h-[400px]" animationData={animationData}></Lottie>

            <div className="hero min-h-screen ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">

    <div className="card flex-shrink-0 w-full max-w-sm bg-base-100">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
        </div>
    );
};

export default Login;