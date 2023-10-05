import React from "react";

export function NavLogin({ isLoggedIn, UpdateLocalStorageData, currentPage }) {
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
