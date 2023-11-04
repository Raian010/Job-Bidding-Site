import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_apikey,       
  authDomain: import.meta.env.VITE_authdomain,       
  projectId: import.meta.env.VITE_projectId,       
  storageBucket: import.meta.env.VITE_storageBucket,       
  messagingSenderId: import.meta.env.VITE_messagingSenderId,       
  appId: import.meta.env.VITE_appId    
  };

const app = initializeApp(firebaseConfig);
export default app;