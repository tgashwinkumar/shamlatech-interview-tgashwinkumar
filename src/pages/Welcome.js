import React, { useContext, useEffect } from "react";
import {
  AuthContext,
  AUTH_LOCAL_STORAGE,
} from "../components/Auth/AuthProvider";
import { useNavigate } from "react-router-dom";
const Welcome = () => {
  const { auth } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("auth", auth);
    if (localStorage.getItem(AUTH_LOCAL_STORAGE) === null) {
      navigate("/admin/login");
    }
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "4rem",
        fontWeight: "bold",
        width: "100vw",
        height: "100vh",
      }}
    >
      Welcome to Dashboard Page{" "}
    </div>
  );
};

export default Welcome;
