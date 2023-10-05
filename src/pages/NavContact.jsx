import React from "react";

export function NavContact({ changePage, isAdmin, currentPage }) {
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
