import React, { createContext, useEffect, useState } from 'react';
import { app } from '../Firebase/Firebase.Config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from "firebase/auth";


const auth = getAuth(app);

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);

  // signup function
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // signIn function

  // observer function

  useEffect(() => {
    const signOut = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    })
    
    return ()=>{
        signOut()
    };
  }, [])

  // auth content value
  const authData = {
    user,
    setUser,
    createUser,
  };

  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;