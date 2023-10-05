import React from "react";
import "../index.css";
import "./navbar.css";
import { NavLink } from "react-router-dom";

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

  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <p>Pojistovna React</p>
        </div>
        <ul className="nav-links" id="nav-links">
          {isLoggedIn && (
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
            </>
          )}
          <li>
            {isLoggedIn ? (
              <NavLink to="/login-jmeno">
                {
                  evidenceList.find(
                    (person) => person.email === loginData.email
                  )?.firstName
                }
              </NavLink>
            ) : (
              <NavLink to="/kontakt">Kontakt</NavLink>
            )}
          </li>
          <li>
            {isLoggedIn && (
              <NavLink
                to="/informace"
                onClick={() => {
                  handleLogout();
                }}
              >
                Odhlásit
              </NavLink>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
}
