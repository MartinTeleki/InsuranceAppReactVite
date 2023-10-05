import React from "react";

export function NavLoginJmeno({
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
