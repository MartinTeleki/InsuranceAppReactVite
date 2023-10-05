import React from "react";

export function NavPojisteni({
  changePage,
  isLoggedIn,
  setShowInsuranceTypes,
  currentPage,
}) {
  return (
    <div>
      {isLoggedIn && (
        <li>
          <a
            href="#"
            alt="pojisteni"
            onClick={() => {
              changePage("pojisteni");
              setShowInsuranceTypes(false);
            }}
            className={currentPage === "pojisteni" ? "active" : ""}
          >
            Pojištění
          </a>
        </li>
      )}
    </div>
  );
}
