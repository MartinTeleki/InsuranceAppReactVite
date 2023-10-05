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
            <NavLink to="/informace">Informace</NavLink>
          </li>

          <li>
            <NavLink to="/registrace">Registrace</NavLink>
          </li>

          <li>
            <NavLink to="/login">Login</NavLink>
          </li>

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
            <NavLink to="/contact">Kontakt</NavLink>
          </li>

          <li>
            <NavLink to="/login-jmeno">
              {isLoggedIn &&
                evidenceList.find((person) => person.email === loginData.email)
                  ?.firstName}
            </NavLink>
          </li>

          <li>{isLoggedIn && <NavLink to="/odhlasit">Odhlásit</NavLink>}</li>
        </ul>
      </nav>
    </div>
  );
}
