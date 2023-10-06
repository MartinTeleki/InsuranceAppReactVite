import React from "react";

export function NavLoginJmeno({ isLoggedIn, loginData, evidenceList }) {
  const email = loginData.email;
  const person = evidenceList.find((osoba) => osoba.email === email);

  return (
    <div>
      <li>
        <a>{person.firstName}</a>
      </li>
    </div>
  );
}
