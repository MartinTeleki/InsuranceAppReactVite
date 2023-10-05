import React from "react";

export function NavInformation({ changePage, isLoggedIn, currentPage }) {
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
