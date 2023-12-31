import React, { createContext, useState, useEffect } from "react";

const BASE_URL = "http://localhost:10000";

const DataUserContext = createContext();

const initialRegistrationInfo = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  age: "",
  city: "",
  password: "",
  controlPassword: "",
  insuranceNumber: "",
  insuranceCode: "",
  gender: "",
  termsAccepted: false,
};

function DataUserProvider({ children }) {
  const [dataUsers, setDataUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [evidenceList, setEvidenceList] = useState([]);
  const [numberOfContracts, setNumberOfContracts] = useState([]);
  const [registrationInfo, setRegistrationInfo] = useState(
    initialRegistrationInfo
  );
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    controlPassword: "",
  });
  const [showInsuranceTypes, setShowInsuranceTypes] = useState(false);

  useEffect(() => {
    const storedEvidence = JSON.parse(localStorage.getItem("evidenceTEST")) || [];
    setEvidenceList(storedEvidence);
  }, []);

  useEffect(function () {
    async function fetchDataUsers() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/users`);
        const data = await res.json();
        setDataUsers(data);
      } catch (error) {
        console.error("There was an error loading data:", error);
        alert("There was an error loading data...");
      } finally {
        setIsLoading(false);
      }
    }

    fetchDataUsers();
  }, []);

  async function createUser(newUser) {
    try {
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}/users`, {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();

      setDataUsers((prevUsers) => [...prevUsers, data]);
    } catch (error) {
      console.error("There was an error creating a user:", error);
      alert("There was an error creating a user...");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <DataUserContext.Provider
      value={{
        dataUsers,
        isLoading,
        evidenceList,
        setEvidenceList,
        registrationInfo,
        setRegistrationInfo,
        isLoggedIn,
        setIsLoggedIn,
        isAdmin,
        setIsAdmin,
        loginData,
        setLoginData,
        showInsuranceTypes,
        setShowInsuranceTypes,
        numberOfContracts,
        setNumberOfContracts,
        createUser,
        setDataUsers
      }}
    >
      {children}
    </DataUserContext.Provider>
  );
}

export { DataUserProvider, DataUserContext };
