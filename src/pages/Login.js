import React, { useEffect, useState } from "react";
import "../assets/dist/css/skins/_all-skins.min.css";
import "../assets/dist/css/styles.css";
import "../assets/dist/css/AdminLTE.min.css";
import "../assets/backend/font-awesome/css/font-awesome.min.css";
import "../assets/backend/select2/select2.min.css";
import "../assets/backend/bootstrap/dist/css/bootstrap.min.css";
import "../assets/backend/iCheck/square/blue.css";
import Logo from "../assets/images/logos/logo.png";
import axios from "axios";
import { AUTH_URL } from "../components/Auth/API";
import {useNavigate} from "react-router-dom";

const Login = () => {
  useEffect(() => {
    document.title = "Dashboard";
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    axios
      .post(AUTH_URL, {
        email: email,
        password: password,
      })
      .then((res) => {
        console.log("Success");
        console.log(res);
        navigate("/admin/verfytofa");
      })
      .catch((err) => {
        console.log("Failure");
        console.log(err);
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
                type="password"
                className="form-control"
                placeholder="Password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="glyphicon glyphicon-lock form-control-feedback"></span>
            </div>

            <div className="row">
              <div className="col-xs-8">
                <div className="checkbox icheck">
                  <label>
                    <input type="checkbox" /> Remember Me
                  </label>
                </div>
              </div>
              <div className="col-xs-4">
                <button
                  onClick={(e) => handleSignIn(e)}
                  className="btn btn-theme btn-block"
                >
                  Sign In
                </button>
              </div>
            </div>
          </form>

          <a href="#">I forgot my password</a>
          <br />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
