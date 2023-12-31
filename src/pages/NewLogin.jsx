import React, { useContext } from "react";
import "./newLogin.css";

import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import { DataUserContext } from "../contexts/DataUserProvider";

export default function NewLogin() {
  const { loginData, setIsAdmin, setLoginData, setIsLoggedIn } =
    useContext(DataUserContext);

  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();

    const evidenceList = JSON.parse(localStorage.getItem("evidenceTEST")) || [];
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
    });

    const { email, password, controlPassword } = loginData;

    for (let i = 0; i < emails.length; i++) {
      if (
        emails[i] === email &&
        passwords[i] === password &&
        passwordControls[i] === controlPassword
      ) {
        setIsLoggedIn(true);
        setIsAdmin(
          email === "martinteleki@seznam.cz" || "Martinteleki@seznam.cz"
        );
        navigate("/login-jmeno");
        alert("Úspěšně jste se přihlásili!");
        return;
      }
    }

    alert("Nesprávný email, heslo nebo kontrolní heslo.");
  }

  return (
    <>
      <div className="container">
        <form method="post" autoComplete="on">
          <div className="box">
            <div className="register-title">
              <h2>Login</h2>
            </div>
            <label htmlFor="email" className="fl fontLabel">
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

          <div className="swap-register">
            <p style={{ color: "#fff", marginTop: "20px" }}>
              Dont you have an acc yet?{" "}
              <Link
                to="/registrace"
                className="btn-register-swap"
                style={{ color: "#2496ff", textDecoration: "none" }}
              >
                <strong>Register</strong>
              </Link>
            </p>
          </div>

          <div className="box" style={{ background: "#2d3e3f" }}>
            <input
              type="submit"
              name="Submit"
              className="submit"
              value="Login"
              onClick={handleLogin}
            />
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}
