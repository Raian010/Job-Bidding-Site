import Lottie from "lottie-react";
import animationData from "../../assets/login-animation.json";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/Authprovider";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";

const Register = () => {
  const { signUp } = useContext(AuthContext);
  const [handleError,setHandleError] = useState("")

  const handleSignup = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    setHandleError("");

    const uppercaseRegex = /^(?=.*[A-Z])/;
    const specialCharRegex = /^(?=.*[@$!%*?&])/;
    const lengthRegex = /^.{6,}$/;

    const isPasswordValid =
      uppercaseRegex.test(password) &&
      specialCharRegex.test(password) &&
      lengthRegex.test(password);

    if (!isPasswordValid) {
      setHandleError(
        "Password should have 6 characters, an uppercase letter, and a special character"
      );
      return;
    }

    signUp(email,password)
    .then(result => {
        const user = result.user
        console.log(user);

        updateProfile(user, {
            displayName: name,
            photoURL: photo,
          })
            .then(() => console.log("updated"))
            .catch((error) => console.log(error));
        
            Swal.fire(
                'Successful!',
                'Registration done!',
                'success'
              )
    })
    .catch(error => console.log(error))
  }

  return (
    <div className="mb-10">
      <div className="min-h-screen flex justify-center gap-10 items-center">
        <Lottie className="h-[500px]" animationData={animationData}></Lottie>

        <div className="shadow-lg rounded-lg w-[400px]">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h2 className="text-2xl font-bold text-center">Register Now!</h2>
              <div className="card mb-5 bg-base-100">
                <form onSubmit={handleSignup} className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      className="input input-bordered w-[280px]"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">PhotoUrl</span>
                    </label>
                    <input
                      type="text"
                      name="photo"
                      placeholder="PhotoUrl"
                      className="input input-bordered"
                      required
                    />
                  </div>
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
                      value="Register"
                      className="btn btn-primary"
                    />
                  </div>
                  <p className="text-red-500 text-center font-semibold">
              {handleError}
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

export default Register;
