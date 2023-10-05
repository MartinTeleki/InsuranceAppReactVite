import React, { useState, useEffect } from "react";
import "./pojistenci.css";
import NavBar from "./NavBar";
import Footer from "../components/Footer";

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
      <NavBar />
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

function PolicyholderFormWrapper({
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

function PolicyholderEditWrapper({
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

function PolicyholderDetails({
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

function NewPolicyholderForm({ addPolicyholder, setShowForm }) {
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
