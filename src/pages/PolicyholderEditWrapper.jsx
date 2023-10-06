import React, { useState } from "react";

export default function PolicyholderEditWrapper({
  policyholder,
  editPolicyholder,
  cancelEdit,
  setShowEdit,
}) {
  const [insuranceType, setInsuranceType] = useState(
    policyholder.insuranceType
  );
  const [amount, setAmount] = useState(policyholder.amount);
  const [insuranceSubject, setInsuranceSubject] = useState(
    policyholder.insuranceSubject
  );
  const [validityFrom, setValidityFrom] = useState(policyholder.validityFrom);
  const [validityTo, setValidityTo] = useState(policyholder.validityTo);
  const [insuredAmount, setInsuredAmount] = useState(
    policyholder.insuredAmount
  );

  const handleEdit = () => {
    const editedPolicyholder = {
      ...policyholder,
      insuranceType,
      amount,
      insuranceSubject,
      validityFrom,
      validityTo,
      insuredAmount,
    };
    editPolicyholder(editedPolicyholder);
    setInsuranceType("");
    setAmount("");
    setInsuranceSubject("");
    setValidityFrom("");
    setValidityTo("");
    setInsuredAmount("");
  };

  return (
    <div className="policyholder-edit">
      <h3>Editovat informace o pojištění</h3>
      <div className="form-group">
        <label>Typ pojištění:</label>
        <input
          type="text"
          value={insuranceType}
          onChange={(e) => setInsuranceType(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Částka:</label>
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Předmět pojištění:</label>
        <input
          type="text"
          value={insuranceSubject}
          onChange={(e) => setInsuranceSubject(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Platnost od:</label>
        <input
          type="text"
          value={validityFrom}
          onChange={(e) => setValidityFrom(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Platnost do:</label>
        <input
          type="text"
          value={validityTo}
          onChange={(e) => setValidityTo(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Výše pojištění:</label>
        <input
          type="text"
          value={insuredAmount}
          onChange={(e) => setInsuredAmount(e.target.value)}
        />
      </div>
      <button
        className="btn-save"
        onClick={() => {
          handleEdit();
          setShowEdit(false);
          cancelEdit();
        }}
      >
        Uložit
      </button>
      <button
        className="btn-cancel"
        onClick={() => {
          cancelEdit();
          setShowEdit(false);
        }}
      >
        Zrušit
      </button>
    </div>
  );
}
