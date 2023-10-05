import React from "react";

export function NavRegister({ changePage, isLoggedIn, currentPage }) {
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
