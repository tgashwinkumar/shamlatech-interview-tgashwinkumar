import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthProvider from "./components/Auth/AuthProvider";
import Login from "./pages/Login";
import VerifyOTP from "./pages/VerifyOTP";
import Welcome from "./pages/Welcome";
function App() {
  return (
    <AuthProvider>
      <div
        className=""
        style={{
          backgroundColor: "##ececec",
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="admin/login" element={<Login />} />
            <Route path="admin/verfytofa" element={<VerifyOTP />} />
            <Route path="" element={<Welcome />} />
          </Routes>
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
}

export default App;
