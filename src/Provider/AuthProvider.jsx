import React, { createContext, useEffect, useState } from 'react';
import { app } from '../Firebase/Firebase.Config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";


const auth = getAuth(app);

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] =useState(true);

  console.log(user);

  // signup function
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // signIn function

  const signIn = (email, password) =>{
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  // observer function

  useEffect(() => {
    const signOut = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    })
    
    return ()=>{
      signOut()
    };
  }, [])


  // Logout function
  const Logout = () =>{
    return signOut(auth);
  } 

  // update user profile

  const updateUserProfile = (updatedData) =>{
    return updateProfile(auth.currentUser, updatedData)
  }

  // auth content value
  const authData = {
    user,
    setUser,
    createUser,
    signIn,
    Logout,
    loading,
    setLoading,
    updateUserProfile
  };

  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;