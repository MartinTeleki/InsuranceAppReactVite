import React from "react";

export function NavPojistenci({ changePage, isAdmin, currentPage }) {
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
