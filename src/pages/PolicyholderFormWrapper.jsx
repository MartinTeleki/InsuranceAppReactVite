import React from "react";

export default function PolicyholderFormWrapper({
  showInsurence,
  handleDeleteEvidenceList,
  actuallyPage,
  changeInsurencePageMinus,
  changeInsurencePage,
  changeInsurencePagePlus,
  amountPages,
  detailPolicyHolder,
  setEditingPolicyholder,
  editHandleShowButton,
}) {
  return (
    <>
      <div>
        <div className="table">
          <div className="table-row header-row">
            <div className="table-cell header-cell">Jméno</div>
            <div className="table-cell header-cell">Bydliště</div>
            <div className="table-cell header-cell">Akce</div>
          </div>

          {showInsurence.map((pojistenec) => (
            <div
              className={`table-row ${pojistenec.isHidden ? "hidden" : ""}`}
              key={pojistenec.id}
            >
              <div
                className="table-cell"
                onClick={() => detailPolicyHolder(pojistenec.id)}
              >
                <span className="names-nav">
                  {pojistenec.firstName} {pojistenec.lastName}
                </span>
              </div>
              <div className="table-cell">
                {" "}
                <span className="names-nav"> {pojistenec.city}</span>
              </div>
              <div className="table-cell">
                <button
                  className="btn-editovat"
                  onClick={() => {
                    setEditingPolicyholder(pojistenec.id);
                    editHandleShowButton();
                  }}
                >
                  Editovat
                </button>
                <button
                  className="btn-odstranit"
                  onClick={() => handleDeleteEvidenceList(pojistenec.id)}
                >
                  Odstranit
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="pagination">
          <button
            className={`pagination-item ${
              actuallyPage === 1 ? "disabled" : ""
            }`}
            onClick={() => changeInsurencePageMinus(actuallyPage)}
          >
            Předchozí
          </button>
          {Array.from({ length: amountPages }, (v, i) => i + 1).map(
            (pageNumber) => (
              <button
                key={pageNumber}
                className={`pagination-item ${
                  actuallyPage === pageNumber ? "active" : ""
                }`}
                onClick={() => changeInsurencePage(pageNumber)}
              >
                {pageNumber}
              </button>
            )
          )}
          <button
            className={`pagination-item ${
              actuallyPage === amountPages ? "disabled" : ""
            }`}
            onClick={() => changeInsurencePagePlus(actuallyPage)}
          >
            Další
          </button>
        </div>
      </div>
    </>
  );
}
