import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext({});

export const AUTH_LOCAL_STORAGE = "user_auth_token";

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);

  const getAuthState = () => {
    const token = localStorage.getItem(AUTH_LOCAL_STORAGE);
    setAuth(token);
    console.log("GET_AUTH", token);
  };

  const setAuthState = async (auth) => {
    localStorage.setItem(AUTH_LOCAL_STORAGE, auth);
    setAuth(auth);
    console.log("SET_AUTH", auth);
  };

  const logout = () => {
    // API.delete(AUTH_LOGOUT, { data: { refreshToken: auth.refreshToken } })
    //   .then(() => {
    //   });
    localStorage.removeItem(AUTH_LOCAL_STORAGE);
    setAuth(null);
  };

  useEffect(() => {
    getAuthState();
  }, [auth]);

  return (
    <AuthContext.Provider value={{ auth, setAuthState, logout, getAuthState }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
