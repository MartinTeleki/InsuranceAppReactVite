import React from "react";

export function NavOdhlasit({
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
