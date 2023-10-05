import React from "react";
import "../index.css";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

export default function NavBar({
  isLoggedIn,
  loginData,
  evidenceList,
  setIsLoggedIn,
  setAdmin,
  isAdmin,
}) {
  function handleLogout() {
    setIsLoggedIn(false);
    setAdmin(false);
  }

  console.log(isAdmin);

  return (
    <div>
      <nav className="navbar">
        <Logo />
        <ul className="nav-links" id="nav-links">
          {isAdmin && isLoggedIn && (
            <>
              <li>
                <NavLink to="/pojistenci">Pojištěnci</NavLink>
              </li>

              <li>
                <NavLink to="/pojisteni">Pojištění</NavLink>
              </li>

              <li>
                <NavLink to="/evidence">Evidence</NavLink>
              </li>

              <li>
                <NavLink to="/login-jmeno">
                  {
                    evidenceList.find(
                      (person) => person.email === loginData.email
                    )?.firstName
                  }
                </NavLink>
              </li>

              <li>
                <NavLink to="/odhlasit" onClick={handleLogout}>
                  Odhlásit
                </NavLink>
              </li>
            </>
          )}
          {isLoggedIn && !isAdmin && (
            <>
              <li>
                <NavLink to="/pojisteni">Pojištění</NavLink>
              </li>
              <li>
                <NavLink to="/login-jmeno">
                  {
                    evidenceList.find(
                      (person) => person.email === loginData.email
                    )?.firstName
                  }
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/informace"
                  onClick={() => {
                    handleLogout();
                  }}
                >
                  Odhlásit
                </NavLink>
              </li>

              <li>
                <NavLink to="/kontakt">Kontakt</NavLink>
              </li>
            </>
          )}
          {!isLoggedIn && (
            <>
              <li>
                <NavLink to="/informace">Informace</NavLink>
              </li>
              <li>
                <NavLink to="/registrace">Registrace</NavLink>
              </li>
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
              <li>
                <NavLink to="/kontakt">Kontakt</NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
}
