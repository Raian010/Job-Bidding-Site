import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../Firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const Authprovider = ({children}) => {

    const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const signUp = (email, password) => {
    setIsLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    setIsLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      // const userEmail = currentUser?.email || user.email;
      // const loggedUser = { email: userEmail };
      setIsLoading(false);
      setUser(currentUser);
      console.log(currentUser);
     
    
    });
    return () => {
      return unSubscribe();
    };
  }, [user]);

  // google login
  const provider = new GoogleAuthProvider();
  const googleSIgn = () => {
      return signInWithPopup(auth,provider)
  }

    const authInfo = {user,signUp,login,logout,isLoading,googleSIgn}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;