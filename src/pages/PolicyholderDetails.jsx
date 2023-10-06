import React from "react";

export default function PolicyholderDetails({
  mergedData,
  selectedPolicyholder,
  setSelectedPolicyholder,
  setShowDetails,
}) {
  const handleCloseDetails = () => {
    setSelectedPolicyholder(null);
    setShowDetails(false);
  };

  return (
    <div>
      <div className="policyholder-details">
        <h3>Detaily pojištěnce</h3>
        <p>Jméno: {mergedData[selectedPolicyholder].firstName}</p>
        <p>Příjmení: {mergedData[selectedPolicyholder].lastName}</p>
        <p>Bydliště: {mergedData[selectedPolicyholder].city}</p>
        <p>Telefonní číslo: {mergedData[selectedPolicyholder].phoneNumber}</p>
        <p>Věk: {mergedData[selectedPolicyholder].age}</p>
        <p>
          Číslo pojištění: {mergedData[selectedPolicyholder].insuranceNumber}
        </p>
        <p>Kód pojištění: {mergedData[selectedPolicyholder].insuranceCode}</p>
        <p>Pohlaví: {mergedData[selectedPolicyholder].gender}</p>

        <button onClick={handleCloseDetails}>Zavřít detaily</button>
      </div>
    </div>
  );
}
