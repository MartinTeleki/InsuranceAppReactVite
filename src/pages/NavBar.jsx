import React from "react";
import "../index.css";
import "./navbar.css";
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
          <NavInformation
            changePage={changePage}
            isLoggedIn={isLoggedIn}
            currentPage={currentPage}
          />

          <NavRegister
            changePage={changePage}
            isLoggedIn={isLoggedIn}
            currentPage={currentPage}
          />

          <NavLogin
            changePage={changePage}
            isLoggedIn={isLoggedIn}
            UpdateLocalStorageData={UpdateLocalStorageData}
            currentPage={currentPage}
          />

          <NavPojistenci
            changePage={changePage}
            isLoggedIn={isLoggedIn}
            isAdmin={isAdmin}
            currentPage={currentPage}
          />

          <NavPojisteni
            changePage={changePage}
            isLoggedIn={isLoggedIn}
            setShowInsuranceTypes={setShowInsuranceTypes}
            showInsuranceTypes={showInsuranceTypes}
            currentPage={currentPage}
          />

          <NavEvidence
            changePage={changePage}
            isLoggedIn={isLoggedIn}
            isAdmin={isAdmin}
            currentPage={currentPage}
          />

          <NavContact
            changePage={changePage}
            isLoggedIn={isLoggedIn}
            isAdmin={isAdmin}
            currentPage={currentPage}
          />

          <NavLoginJmeno
            changePage={changePage}
            isLoggedIn={isLoggedIn}
            loginData={loginData}
            evidenceList={evidenceList}
            currentPage={currentPage}
          />

          <NavOdhlasit
            changePage={changePage}
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
            setIsAdmin={setIsAdmin}
            currentPage={currentPage}
          />
        </ul>
      </nav>
    </div>
  );
}
function NavInformation({ changePage, isLoggedIn, currentPage }) {
  return (
    <div>
      {!isLoggedIn && (
        <li>
          <a
            href="#"
            alt="informace"
            onClick={() => {
              changePage("informace");
            }}
            className={currentPage === "informace" ? "active" : ""}
          >
            Informace
          </a>
        </li>
      )}
    </div>
  );
}
function NavRegister({ changePage, isLoggedIn, currentPage }) {
  return (
    <div>
      {!isLoggedIn && (
        <li>
          <a
            href="#"
            alt="registrace"
            onClick={() => changePage("register")}
            className={currentPage === "register" ? "active" : ""}
          >
            Registrace
          </a>
        </li>
      )}
    </div>
  );
}
function NavLogin({ isLoggedIn, UpdateLocalStorageData, currentPage }) {
  return (
    <div>
      {!isLoggedIn && (
        <li>
          <a
            href="#"
            alt="login"
            onClick={UpdateLocalStorageData}
            className={currentPage === "login" ? "active" : ""}
          >
            Login
          </a>
        </li>
      )}
    </div>
  );
}
function NavEvidence({ changePage, isAdmin, currentPage }) {
  return (
    <div>
      {isAdmin && (
        <li>
          <a
            href="#"
            alt="evidence"
            onClick={() => changePage("evidence")}
            className={currentPage === "evidence" ? "active" : ""}
          >
            Evidence
          </a>
        </li>
      )}
    </div>
  );
}
function NavContact({ changePage, isAdmin, currentPage }) {
  return (
    <div>
      {!isAdmin && (
        <li>
          <a
            href="#"
            alt="kontakt"
            onClick={() => changePage("contact")}
            className={currentPage === "contact" ? "active" : ""}
          >
            Kontakt
          </a>
        </li>
      )}
    </div>
  );
}
function NavPojistenci({ changePage, isAdmin, currentPage }) {
  return (
    <div>
      {isAdmin && (
        <li>
          <a
            href="#"
            alt="pojistenci"
            onClick={() => changePage("pojistenci")}
            className={currentPage === "pojistenci" ? "active" : ""}
          >
            Pojištěnci
          </a>
        </li>
      )}
    </div>
  );
}
function NavPojisteni({
  changePage,
  isLoggedIn,
  setShowInsuranceTypes,
  currentPage,
}) {
  return (
    <div>
      {isLoggedIn && (
        <li>
          <a
            href="#"
            alt="pojisteni"
            onClick={() => {
              changePage("pojisteni");
              setShowInsuranceTypes(false);
            }}
            className={currentPage === "pojisteni" ? "active" : ""}
          >
            Pojištění
          </a>
        </li>
      )}
    </div>
  );
}

function NavOdhlasit({
  changePage,
  isLoggedIn,
  setIsLoggedIn,
  setIsAdmin,
  currentPage,
}) {
  return (
    <div>
      {isLoggedIn && (
        <li>
          <a
            href="#"
            alt="odhlasit"
            onClick={() => {
              changePage("login");
              setIsLoggedIn(false);
              setIsAdmin(false);
            }}
            className={currentPage === "odhlasit" ? "active" : ""}
          >
            Odhlásit
          </a>
        </li>
      )}
    </div>
  );
}
function NavLoginJmeno({
  changePage,
  isLoggedIn,
  loginData,
  evidenceList,
  currentPage,
}) {
  const email = loginData.email;
  const person = evidenceList.find((osoba) => osoba.email === email);

  return (
    <div>
      {isLoggedIn && (
        <li>
          <a
            href="#"
            alt="login-jmeno"
            onClick={() => changePage("login-jmeno")}
            className={currentPage === "login-jmeno" ? "active" : ""}
          >
            {person.firstName}
          </a>
        </li>
      )}
    </div>
  );
}
