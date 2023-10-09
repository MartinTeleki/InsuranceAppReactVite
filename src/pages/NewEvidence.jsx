import React, { useContext, useEffect } from "react";
import "./newEvidence.css";
import Footer from "../components/Footer";
import { DataUserContext } from "../contexts/DataUserProvider";

export default function NewEvidence() {
  const { evidenceList, setEvidenceList } = useContext(DataUserContext);

  

  return (
    <>
      <div>
        {evidenceList.map((evidence, index) => (
          <div key={index} className="evidence-container">
            <div className="evidence-item evidence-item-title">
              <h2>Evidence: {index + 1}</h2>
              <em className="evidence-em">{evidence.insuranceNumber}</em>
            </div>
            <div className="evidence-item">
              <h3>First Name:</h3>
              <p>{evidence.firstName}</p>
            </div>
            <div className="evidence-item">
              <h3>Last Name:</h3>
              <p>{evidence.lastName}</p>
            </div>
            <div className="evidence-item">
              <h3>Email:</h3>
              <p>{evidence.email}</p>
            </div>
            <div className="evidence-item">
              <h3>Phone Number:</h3>
              <p>{evidence.phoneNumber}</p>
            </div>
            <div className="evidence-item">
              <h3>Age:</h3>
              <p>{evidence.age}</p>
            </div>
            <div className="evidence-item">
              <h3>Insurance Number:</h3>
              <p>{evidence.insuranceNumber}</p>
            </div>
            <div className="evidence-item">
              <h3>Insurance Code:</h3>
              <p>{evidence.insuranceCode}</p>
            </div>
            <div className="evidence-item">
              <h3>Gender:</h3>
              <p>{evidence.gender}</p>
            </div>
            <div className="btn-delete-container">
              <button
                className="btn-delete"
                onClick={() => handleDeleteEvidenceList(index)}
              >
                Delete user
              </button>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}
