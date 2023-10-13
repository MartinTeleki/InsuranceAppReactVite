import React, { useContext, useState } from "react";
import "../index.css";
import "./navbar.css";
import { NavLink, Link } from "react-router-dom";
import Logo from "./Logo";
import { DataUserContext } from "../contexts/DataUserProvider";

export default function NavBar() {
  const {
    evidenceList,
    isAdmin,
    isLoggedIn,
    setIsLoggedIn,
    setAdmin,
    loginData,
  } = useContext(DataUserContext);

  function handleLogout() {
    setIsLoggedIn(false);
    setAdmin(false);
  }

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <nav className="navbar">
        <Logo />
        <div className="bar-container" onClick={() => setMenuOpen(!menuOpen)}>
          <div className={`bar ${menuOpen ? "open" : ""}`}></div>
          <div className={`bar ${menuOpen ? "open" : ""}`}></div>
          <div className={`bar ${menuOpen ? "open" : ""}`}></div>
        </div>
        <ul
          className={`nav-links ${menuOpen ? "show-menu" : ""}`}
          id="nav-links"
        >
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
                <NavLink to="/login" onClick={handleLogout}>
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
                <Link
                  to="/login"
                  onClick={() => {
                    handleLogout();
                  }}
                >
                  Odhlásit
                </Link>
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
