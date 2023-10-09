import React, { useState, useEffect, createContext, useContext } from "react";
import { DataUserContext } from "./DataUserProvider";

const DataPolicyholderContext = createContext();

export default function DataPolicyholderProvider({ children }) {
  const { evidenceList, setEvidenceList } = useContext(DataUserContext);
console.log(evidenceList, "pes")
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
      policyholder.id === editedPolicyholder.id ? editedPolicyholder : policyholder
    );
    setEvidenceList(updatedEvidenceList);
    localStorage.setItem("evidenceTEST", JSON.stringify(updatedEvidenceList));
  };

  const handleDeleteEvidenceList = (index) => {
    const updatedEvidenceList = [...evidenceList];
    updatedEvidenceList.splice(index, 1);

    const updatedMergedData = [...mergedData];
    updatedMergedData[index].isHidden = true;

    setEvidenceList(updatedEvidenceList);
    localStorage.setItem("evidenceTEST", JSON.stringify(updatedEvidenceList));
    setMergedData(updatedMergedData);
  };

  const addPolicyholder = (newPolicyholder) => {
    const updatedEvidenceList = [...evidenceList, newPolicyholder];
    setEvidenceList(updatedEvidenceList);

    localStorage.setItem("evidenceTEST", JSON.stringify(updatedEvidenceList));
  };

  const amountPages = Math.ceil(mergedData.length / pageRecords);

  const changeInsurencePage = (numberPage) => {
    if (numberPage >= 1 && numberPage <= amountPages) {
      setActuallyPage(numberPage);
    }
  };

  const changeInsurencePagePlus = () => {
    if (actuallyPage < amountPages) {
      setActuallyPage(actuallyPage + 1);
    }
  };

  const changeInsurencePageMinus = () => {
    if (actuallyPage > 1) {
      setActuallyPage(actuallyPage - 1);
    }
  };

  const startIndex = (actuallyPage - 1) * pageRecords;
  const finishIndex = startIndex + pageRecords;
  const showInsurence = mergedData.slice(startIndex, finishIndex);

  const detailPolicyHolder = (policyholderId) => {
    setSelectedPolicyholder(policyholderId);
    setShowDetails(true);
  };

  const editHandleShowButton = () => {
    setShowEdit(!showEdit);
  };

  return (
    <DataPolicyholderContext.Provider
      value={{
        mergedData,
        actuallyPage,
        selectedPolicyholder,
        editingPolicyholder,
        showForm,
        showDetails,
        showEdit,
        editPolicyholder,
        handleDeleteEvidenceList,
        addPolicyholder,
        changeInsurencePage,
        changeInsurencePagePlus,
        changeInsurencePageMinus,
        showInsurence,
        detailPolicyHolder,
        editHandleShowButton,
        setShowForm,
        setEditingPolicyholder,
        
      }}
    >
      {children}
    </DataPolicyholderContext.Provider>
  );
}

export { DataPolicyholderProvider, DataPolicyholderContext };
