import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_API_KEY}`,
  authDomain: `${process.env.REACT_APP_DOMAIN}`,
  projectId: "react-auth-login-1d4d5",
  storageBucket: "react-auth-login-1d4d5.appspot.com",
  messagingSenderId: "766464778984",
  appId: "1:766464778984:web:7d7969604be58f83471f5d",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;
