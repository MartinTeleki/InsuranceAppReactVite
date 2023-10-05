import React from "react";

export function NavOdhlasit({
  isLoggedIn,
  setIsLoggedIn,
  setIsAdmin,
  currentPage,
}) {
  function handleLogout() {
    setIsLoggedIn(false);
    setIsAdmin(false);
  }

  return (
    <div>
      {isLoggedIn && (
        <li>
          <a
            href="#"
            alt="odhlasit"
            onClick={() => {
              handleLogout();
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
