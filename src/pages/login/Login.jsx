import React from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import appleLogo from "../../images/apple 1.svg";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import googleLogo from "../../images/google-icon 1.svg";
import discordLogo from "../../images/carbon_logo-discord.svg";
import twitterLogo from "../../images/twitter-logo.svg";
import gitLogo from "../../images/github-logo.svg";
import linkedinLogo from "../../images/carbon_logo-linkedin.svg";

export default function Login() {
  const navigate = useNavigate();

  const handleLoginSuccess = (credentialResponse) => {
    console.log("Login successful"); // Add this
    var decoded = jwt_decode(credentialResponse.credential);
    localStorage.setItem("jwtToken", credentialResponse.credential);
    console.log(decoded);

    // Redirect to the dashboard page
    navigate("/dashboard");
  };

  return (
    <div className="login">
      <div className="login-left">
        <div className="left-part">
          <p className="logo">LOGO</p>
          <h1 className="title">Board.</h1>
        </div>
        <div className="skew-part"></div>
        <div className="footer-logos">
          <a>
            <img src={gitLogo} alt="" />
          </a>
          <a>
            <img src={twitterLogo} alt="" />
          </a>
          <a>
            <img style = {{width: "50px", height: "50px"}} src={discordLogo} alt="" />
          </a>
          <a>
            <img style = {{width: "50px", height: "50px"}} src={linkedinLogo} alt="" />
          </a>
        </div>
      </div>
      <div className="login-right">
        <div className="login-container">
          <span>Sign in</span>
          <p>Sign in to your account</p>

          <div className="sign-google-apple">
            <GoogleOAuthProvider clientId="340122050605-utn4v33n842bic9qje938m185depiiob.apps.googleusercontent.com">
              <GoogleLogin
                onSuccess={handleLoginSuccess}
                onError={() => {
                  console.log("Login Failed");
                }}
              />
            </GoogleOAuthProvider>
            <div>
              <img src={appleLogo} alt="apple" />
              <p>Sign in with apple</p>
            </div>
          </div>
          <div class="login-form-container">
            <form className="loginForm">
              <label>Email Address</label>
              <input type="text" placeholder="Email Address" required="true" />
              <label>Password</label>
              <input type="password" placeholder="Password" required="true" />
              <div class="forgot-password">
                <a href="#">Forgot Password?</a>
              </div>
              <button type="submit">Sign In</button>
            </form>
          </div>
          <div class="register-link">
            Don't have an account? <a href="#">Register Here</a>
          </div>
        </div>
      </div>
    </div>
  );
}
