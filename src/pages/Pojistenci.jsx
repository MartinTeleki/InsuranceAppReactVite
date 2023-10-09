import React, { useState, useEffect } from "react";
import "./pojistenci.css";
import NavBar from "./NavBar";
import Footer from "../components/Footer";
import PolicyholderDetails from "./PolicyholderDetails";
import NewPolicyholderForm from "./NewPolicyholderForm";
import PolicyholderEditWrapper from "./PolicyholderEditWrapper";
import PolicyholderFormWrapper from "./PolicyholderFormWrapper";

export default function Pojistenci() {
  const [evidenceList, setEvidenceList] = useState([]);
  const [mergedData, setMergedData] = useState([]);
  const [actuallyPage, setActuallyPage] = useState(1);
  const [selectedPolicyholder, setSelectedPolicyholder] = useState(null);
  const pageRecords = 3;
  const [editingPolicyholder, setEditingPolicyholder] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  useEffect(() => {
    const storedEvidence =
      JSON.parse(localStorage.getItem("evidenceTEST")) || [];

    const mergedData = storedEvidence.map((info, index) => ({
      id: index,
      firstName: info.firstName,
      lastName: info.lastName,
      city: info.city,
      phoneNumber: info.phoneNumber,
      gender: info.gender,
      age: info.age,
      insuranceNumber: info.insuranceNumber,
      insuranceCode: info.insuranceCode,
      isHidden: false,
    }));

    setMergedData(mergedData);
    setEvidenceList(storedEvidence);
  }, []);

  const editPolicyholder = (editedPolicyholder) => {
    const updatedEvidenceList = evidenceList.map((policyholder) =>
      policyholder.id === editedPolicyholder.id
        ? editedPolicyholder
        : policyholder
    );
    setEvidenceList(updatedEvidenceList);
    localStorage.setItem("evidenceTEST", JSON.stringify(updatedEvidenceList));
  };

  function handleDeleteEvidenceList(index) {
    const updatedEvidenceList = [...evidenceList];
    updatedEvidenceList.splice(index, 1);

    const updatedMergedData = [...mergedData];
    updatedMergedData[index].isHidden = true;

    setEvidenceList(updatedEvidenceList);
    localStorage.setItem("evidenceTEST", JSON.stringify(updatedEvidenceList));
    setMergedData(updatedMergedData);
  }

  const addPolicyholder = (newPolicyholder) => {
    const updatedEvidenceList = [...evidenceList, newPolicyholder];
    setEvidenceList(updatedEvidenceList);

    localStorage.setItem("evidenceTEST", JSON.stringify(updatedEvidenceList));
  };

  const amountPages = Math.ceil(mergedData.length / pageRecords);

  const changeInsurencePage = (numberPage) => {
    setActuallyPage(numberPage);
  };

  function changeInsurencePagePlus(actuallyPage) {
    if (actuallyPage === amountPages) {
      actuallyPage = amountPages;
    } else {
      setActuallyPage(actuallyPage + 1);
    }
  }

  function changeInsurencePageMinus(actuallyPage) {
    if (actuallyPage === 1) {
      actuallyPage = 1;
    } else {
      setActuallyPage(actuallyPage - 1);
    }
  }

  const startIndex = (actuallyPage - 1) * pageRecords;
  const finishIndex = startIndex + pageRecords;
  const showInsurence = mergedData.slice(startIndex, finishIndex);

  const detailPolicyHolder = (policyholderId) => {
    setSelectedPolicyholder(policyholderId);
    setShowDetails(true);
  };

  function editHandleShowButton() {
    setShowEdit(!showEdit);
  }

  return (
    <>
      <div className="table-container">
        <h2 className="table-title">
          {showEdit
            ? "Editace Pojištěného"
            : showDetails
            ? "Detaily pojištěného"
            : showForm
            ? "Nový pojištěnec"
            : "Pojištěnci"}
        </h2>

        {!showDetails && !showEdit && (
          <button
            className="new-policyholder"
            onClick={() => setShowForm(!showForm)}
          >
            {showForm ? "Skrýt formulář" : "Nový pojištěnec"}
          </button>
        )}

        {showForm && (
          <NewPolicyholderForm
            addPolicyholder={addPolicyholder}
            handleDeleteEvidenceList={handleDeleteEvidenceList}
            actuallyPage={actuallyPage}
            changeInsurencePageMinus={changeInsurencePageMinus}
            changeInsurencePage={changeInsurencePage}
            changeInsurencePagePlus={changeInsurencePagePlus}
            amountPages={amountPages}
            showInsurence={showInsurence}
            setShowForm={setShowForm}
            showForm={showForm}
          />
        )}

        {!showForm && !showDetails && !showEdit && (
          <PolicyholderFormWrapper
            showInsurence={showInsurence}
            handleDeleteEvidenceList={handleDeleteEvidenceList}
            actuallyPage={actuallyPage}
            changeInsurencePageMinus={changeInsurencePageMinus}
            changeInsurencePage={changeInsurencePage}
            changeInsurencePagePlus={changeInsurencePagePlus}
            amountPages={amountPages}
            detailPolicyHolder={detailPolicyHolder}
            setEditingPolicyholder={setEditingPolicyholder}
            showEdit={showEdit}
            setShowEdit={setShowEdit}
            editHandleShowButton={editHandleShowButton}
          />
        )}

        {showDetails && (
          <PolicyholderDetails
            mergedData={mergedData}
            selectedPolicyholder={selectedPolicyholder}
            setSelectedPolicyholder={setSelectedPolicyholder}
            showDetails={showDetails}
            setShowDetails={setShowDetails}
          />
        )}

        <div className="table-container">
          {editingPolicyholder !== null && (
            <PolicyholderEditWrapper
              policyholder={evidenceList[editingPolicyholder]}
              editPolicyholder={editPolicyholder}
              cancelEdit={() => setEditingPolicyholder(null)}
              setShowEdit={setShowEdit}
              showEdit={showEdit}
              setEditingPolicyholder={setEditingPolicyholder}
              editHandleShowButton={editHandleShowButton}
            />
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}