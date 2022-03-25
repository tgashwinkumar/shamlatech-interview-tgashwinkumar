import React, { useContext, useEffect, useState } from "react";
import "../assets/dist/css/skins/_all-skins.min.css";
import "../assets/dist/css/styles.css";
import "../assets/dist/css/AdminLTE.min.css";
import "../assets/backend/font-awesome/css/font-awesome.min.css";
import "../assets/backend/select2/select2.min.css";
import "../assets/backend/bootstrap/dist/css/bootstrap.min.css";
import "../assets/backend/iCheck/square/blue.css";
import Logo from "../assets/images/logos/logo.png";
import axios from "axios";
import { VERIFY_OTP_URL } from "../components/Auth/API";
import { AuthContext } from "../components/Auth/AuthProvider";
import { useNavigate } from "react-router-dom";
const VerifyOTP = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");

  const { setAuthState } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleVerifyOTP = (e) => {
    e.preventDefault();
    axios
      .post(VERIFY_OTP_URL, {
        email: email,
        otp: otp,
      })
      .then((res) => {
        console.log("Success");
        console.log(res.data.token);
        setAuthState(res.data.token);
      })
      .catch((err) => {
        console.log("Failure");
        console.log(err);
      })
      .then(() => {
        navigate("/");
      });
  };

  return (
    <React.Fragment>
      <div className="login-box">
        <div className="login-logo">
          <a href="#">
            <img
              src={Logo}
              className="img-responsive"
              width="130"
              height="52"
              style={{ margin: "auto" }}
              alt=""
            />
          </a>
        </div>

        <div
          className="login-box-body"
          style={{ padding: "40px 20px", boxShadow: "0 0 5px #121212" }}
        >
          <form action="h#" method="POST" id="admin_login_form">
            <input type="hidden" name="_token" value="" />

            <p
              className=""
              style={{
                textAlign: "center",
                fontSize: "1.625rem",
                color: "lime",
              }}
            >
              OTP has been sent to your email address
            </p>

            <div className="form-group has-feedback ">
              <label className="control-label sr-only" for="inputSuccess2">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
            </div>

            <div className="form-group has-feedback ">
              <label className="control-label sr-only" for="inputSuccess2">
                Password
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="OTP"
                name="password"
                id="password"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
              <span className="glyphicon glyphicon-lock form-control-feedback"></span>
            </div>

            <div className="row">
              <div className="col-xs-8"></div>
              <div className="col-xs-4">
                <button
                  onClick={(e) => handleVerifyOTP(e)}
                  className="btn btn-theme btn-block"
                >
                  Verify OTP
                </button>
              </div>
            </div>
          </form>
          <br />
        </div>
      </div>
    </React.Fragment>
  );
};

export default VerifyOTP;
