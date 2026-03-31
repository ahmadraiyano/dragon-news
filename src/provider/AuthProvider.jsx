import React, { useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const createLogin = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const updateUser = updateObj => {
    return updateProfile(auth.currentUser, updateObj)
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false)
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const createLogout = () => {
    return signOut(auth);
  };

  const authData = {
    user,
    setUser,
    createUser,
    createLogin,
    createLogout,
    loading,
    setLoading,
    updateUser
  };
  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
