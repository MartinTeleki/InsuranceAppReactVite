import React from "react";

export function NavEvidence({ changePage, isAdmin, currentPage }) {
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
