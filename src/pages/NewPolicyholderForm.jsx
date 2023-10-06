import React, { useState } from "react";

export default function NewPolicyholderForm({ addPolicyholder, setShowForm }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [insuranceNumber, setInsuranceNumber] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [city, setCity] = useState("");

  const generateUniqueId = () => {
    const currentTime = new Date().getTime();
    const randomId = Math.floor(Math.random() * 10000);
    return `${currentTime}-${randomId}`;
  };

  const handleAddNewInsurancePolicy = (e) => {
    e.preventDefault();

    if (
      firstName &&
      lastName &&
      phoneNumber &&
      insuranceNumber &&
      age &&
      gender &&
      city
    ) {
      const uniqueId = generateUniqueId();

      const newPolicyholder = {
        id: uniqueId,
        firstName,
        lastName,
        phoneNumber,
        insuranceNumber,
        age,
        gender,
        city,
      };

      addPolicyholder(newPolicyholder);
      alert("Registrace proběhla úspěšně");
      setShowForm(false);
      setFirstName("");
      setLastName("");
      setPhoneNumber("");
      setInsuranceNumber("");
      setAge("");
      setGender("");
      setCity("");
    } else {
      alert("Vyplňte prosím všechna pole");
    }
  };

  return (
    <form className="policyholder-form">
      <h2>Přidat nového pojištěnce</h2>
      <div className="form-group">
        <label>Jméno:</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Příjmení:</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Telefon:</label>
        <input
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Číslo smlouvy:</label>
        <input
          type="text"
          value={insuranceNumber}
          onChange={(e) => setInsuranceNumber(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Věk:</label>
        <input
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Pohlaví:</label>
        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          required
        >
          <option value="">Vyberte pohlaví</option>
          <option value="Male">Muž</option>
          <option value="Female">Žena</option>
          <option value="Other">Jiné</option>
        </select>
      </div>
      <div className="form-group">
        <label>Bydliště:</label>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>
      <button
        className="btn-add-insurance-person"
        type="submit"
        onClick={handleAddNewInsurancePolicy}
      >
        Přidat pojištěnce
      </button>
    </form>
  );
}
