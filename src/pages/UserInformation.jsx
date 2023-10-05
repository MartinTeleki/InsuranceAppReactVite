import React from "react";
import "./userInformation.css";
import randomUserDataList from "../components/data";
import NavBar from "./NavBar";
import Footer from "../components/Footer";

export default function UserInformation({ loginData, evidenceList }) {
  const user = evidenceList.find((person) => person.email === loginData.email);
  // console.log(evidenceList);
  // console.log(user);

  return (
    <>
      <div className="user-info-container">
        <h2>
          Osobní údaje uživatele{" "}
          <span style={{ color: "#a2ff00" }}>
            {user.firstName} {user.lastName}
          </span>{" "}
        </h2>
        <div className="user-info">
          <div className="user-info-item">
            <strong>Jméno:</strong>{" "}
            <span className="user-info-item-span">{user.firstName}</span>
          </div>
          <div className="user-info-item">
            <strong>Příjmení:</strong>{" "}
            <span className="user-info-item-span">{user.lastName}</span>
          </div>
          <div className="user-info-item">
            <strong>Město:</strong>{" "}
            <span className="user-info-item-span">{user.city}</span>
          </div>
          <div className="user-info-item">
            <strong>Email:</strong>{" "}
            <span className="user-info-item-span">{user.email}</span>
          </div>
          <div className="user-info-item">
            <strong>Pohlaví:</strong>{" "}
            <span className="user-info-item-span">{user.gender}</span>
          </div>
          <div className="user-info-item">
            <strong>Identifikační číslo:</strong>{" "}
            <span className="user-info-item-span">{user.id}</span>
          </div>
          <div className="user-info-item">
            <strong>Kód pojištění:</strong>{" "}
            <span className="user-info-item-span">{user.insuranceCode}</span>
          </div>
          <div className="user-info-item">
            <strong>Číslo pojištění:</strong>{" "}
            <span className="user-info-item-span">{user.insuranceNumber}</span>
          </div>
          <div className="user-info-item">
            <strong>Předmět pojištění:</strong>{" "}
            <span className="user-info-item-span">{user.insuranceSubject}</span>
          </div>
          <div className="user-info-item">
            <strong>Typ pojištění:</strong>{" "}
            <span className="user-info-item-span">{user.insuranceType}</span>
          </div>
          <div className="user-info-item">
            <strong>Roční platba za pojištění:</strong>{" "}
            <span className="user-info-item-span">{user.insuredAmount}</span>
          </div>
          <div className="user-info-item">
            <strong>Telefonní číslo:</strong>{" "}
            <span className="user-info-item-span">{user.phoneNumber}</span>
          </div>
          <div className="user-info-item">
            <strong>Všeobecné podmínky byly splněny:</strong>{" "}
            <span className="user-info-item-span">
              {user.termsAccepted ? "Ano" : "Ne"}
            </span>
          </div>
          <div className="user-info-item">
            <strong>Platnost pojištění od:</strong>{" "}
            <span className="user-info-item-span">{user.validityFrom}</span>
          </div>
          <div className="user-info-item">
            <strong>Platnost pojištění do:</strong>{" "}
            <span className="user-info-item-span">{user.validityTo}</span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
