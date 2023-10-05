import React from "react";
import "./newLogin.css";
import NavBar from "./NavBar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function NewLogin({
  changePage,
  loginData,
  setLoginData,
  handleLogin,
  setIsAdmin,
  setIsLoggedIn,
}) {
  function handleLogin(e) {
    e.preventDefault();

    const evidenceList = JSON.parse(localStorage.getItem("evidenceTEST")) || [];

    const firstNames = [];
    const emails = [];
    const passwords = [];
    const passwordControls = [];

    evidenceList.forEach((item) => {
      if (item.email && item.email.trim() !== "") {
        emails.push(item.email);
      }
      if (item.password && item.password.trim() !== "") {
        passwords.push(item.password);
      }
      if (item.controlPassword && item.controlPassword.trim() !== "") {
        passwordControls.push(item.controlPassword);
      }
      if (item.firstName && item.firstName.trim() !== "") {
        firstNames.push(item.firstName);
      }
    });

    processLogin(emails, passwords, passwordControls, firstNames);
  }

  function processLogin(emails, passwords, passwordControls) {
    const { email, password, controlPassword } = loginData;
    let isLoggedIn = false;

    for (let i = 0; i < emails.length; i++) {
      if (
        emails[i] === email &&
        passwords[i] === password &&
        passwordControls[i] === controlPassword
      ) {
        isLoggedIn = true;
      }
    }

    if (isLoggedIn) {
      alert("Úspěšně jste se přihlásili!");
      if (email === "Martinteleki@seznam.cz") {
        setIsAdmin(true);
      }
      changePage("login-jmeno");
      setIsLoggedIn(true);
    } else {
      changePage("login");
      alert("Nesprávný email, heslo nebo kontrolní heslo.");
    }
  }
  return (
    <>
      <div className="container">
        <form method="post" autoComplete="on">
          {/* First name */}
          <div className="box">
            <div className="register-title">
              <h2>Login</h2>
            </div>
            <label htmlFor="firstName" className="fl fontLabel">
              {" "}
              Email:{" "}
            </label>
            <div className="new iconBox">
              <i className="fa fa-envelope" aria-hidden="true"></i>
            </div>
            <div className="fr">
              <input
                type="email"
                name="email"
                placeholder="jannovak@seznam.cz"
                autoFocus="on"
                required
                className="textBox"
                onChange={(e) =>
                  setLoginData({
                    ...loginData,
                    email: e.target.value,
                  })
                }
              />
            </div>
            <div className="clr"></div>
          </div>
          {/* First name */}
          {/* Password */}
          <div className="box">
            <label htmlFor="password" className="fl fontLabel">
              {" "}
              Password{" "}
            </label>
            <div className="fl iconBox">
              <i className="fa fa-key" aria-hidden="true"></i>
            </div>
            <div className="fr">
              <input
                type="password"
                required
                name="password"
                placeholder="*******"
                className="textBox"
                onChange={(e) =>
                  setLoginData({
                    ...loginData,
                    password: e.target.value,
                  })
                }
              />
            </div>
            <div className="clr"></div>
          </div>
          {/* Password */}
          {/* Repassword */}
          <div className="box">
            <label htmlFor="controlPassword" className="fl fontLabel">
              {" "}
              Re-Password:{" "}
            </label>
            <div className="fl iconBox">
              <i className="fa fa-key" aria-hidden="true"></i>
            </div>
            <div className="fr">
              <input
                type="password"
                required
                name="controlPassword"
                placeholder="*******"
                className="textBox"
                onChange={(e) =>
                  setLoginData({
                    ...loginData,
                    controlPassword: e.target.value,
                  })
                }
              />
            </div>
            <div className="clr"></div>
          </div>
          {/* Repassword */}

          <div className="swap-register">
            <p style={{ color: "#fff", marginTop: "20px" }}>
              Dont you have an acc yet?{" "}
              <Link
                to="/registrace"
                className="btn-register-swap"
                style={{ color: "#2496ff", textDecoration: "none" }}
              >
                <span onClick={() => changePage("register")}>
                  <strong>
                    <br />
                    Register
                  </strong>
                </span>
              </Link>
            </p>
          </div>

          {/* Submit Button */}
          <div className="box" style={{ background: "#2d3e3f" }}>
            <input
              type="submit"
              name="Submit"
              className="submit"
              value="Login"
              onClick={handleLogin}
            />
          </div>
          {/* Submit Button */}
        </form>
      </div>
      <Footer />
    </>
  );
}
