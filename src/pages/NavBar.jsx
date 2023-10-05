import React from "react";
import "../index.css";
import "./navbar.css";
import { NavLink, Link } from "react-router-dom";
import { NavInformation } from "./NavInformation";
import { NavRegister } from "./NavRegister";
import { NavLogin } from "./NavLogin";
import { NavEvidence } from "./NavEvidence";
import { NavContact } from "./NavContact";
import { NavPojistenci } from "./NavPojistenci";
import { NavPojisteni } from "./NavPojisteni";
import { NavOdhlasit } from "./NavOdhlasit";
import { NavLoginJmeno } from "./NavLoginJmeno";

export default function NavBar({
  changePage,
  isLoggedIn,
  loginData,
  evidenceList,
  setIsLoggedIn,
  setIsAdmin,
  isAdmin,
  setEvidenceList,
  setNumberOfContracts,
  setShowInsuranceTypes,
  showInsuranceTypes,
  currentPage,
}) {
  function UpdateLocalStorageData() {
    const storedEvidence =
      JSON.parse(localStorage.getItem("evidenceTEST")) || [];
    setEvidenceList(storedEvidence);
    setNumberOfContracts(storedEvidence);
    changePage("login");
  }

  function toggleMenu() {
    const navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("show-menu");
  }

  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <p>Pojistovna React</p>
        </div>
        <div className="bar-container" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <ul className="nav-links" id="nav-links">
          <li>
            <Link
              to="/informace"
              className={currentPage === "informace" ? "active" : ""}
            >
              Informace
            </Link>
          </li>

          <li>
            <Link
              to="/registrace"
              className={currentPage === "registrace" ? "active" : ""}
            >
              Registrace
            </Link>
          </li>

          <li>
            <Link
              to="/login"
              className={currentPage === "login" ? "active" : ""}
              onClick={UpdateLocalStorageData}
            >
              Login
            </Link>
          </li>

          <li>
            <Link
              to="/pojistenci"
              className={currentPage === "pojistenci" ? "active" : ""}
            >
              Pojištěnci
            </Link>
          </li>

          <li>
            <Link
              to="/pojisteni"
              className={currentPage === "pojisteni" ? "active" : ""}
              onClick={() => setShowInsuranceTypes(false)}
            >
              Pojištění
            </Link>
          </li>

          <li>
            <Link
              to="/evidence"
              className={currentPage === "evidence" ? "active" : ""}
            >
              Evidence
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              className={currentPage === "contact" ? "active" : ""}
            >
              Kontakt
            </Link>
          </li>

          <li>
            <Link
              to="/login-jmeno"
              className={currentPage === "login-jmeno" ? "active" : ""}
            >
              {isLoggedIn &&
                evidenceList.find((person) => person.email === loginData.email)
                  ?.firstName}
            </Link>
          </li>

          <li>
            {isLoggedIn && (
              <Link
                to="/odhlasit"
                className={currentPage === "odhlasit" ? "active" : ""}
                onClick={() => {
                  setIsLoggedIn(false);
                  setIsAdmin(false);
                }}
              >
                Odhlásit
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
}
