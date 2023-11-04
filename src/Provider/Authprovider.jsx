import { createContext } from "react";
import { getAuth } from "firebase/auth";
import app from "../Firebase/firebase.config";

const AuthContext = createContext(null);
const auth = getAuth(app);

const Authprovider = ({children}) => {

    const authInfo = {}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;