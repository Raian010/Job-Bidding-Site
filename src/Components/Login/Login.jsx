import Lottie from "lottie-react";
import animationData from "../../assets/login-animation.json"

const Login = () => {
    return (
        <div className="min-h-screen flex items-center">
            <h2>This is a login page</h2>
            <Lottie className="h-[400px]" animationData={animationData}></Lottie>
        </div>
    );
};

export default Login;