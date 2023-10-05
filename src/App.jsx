import React, { useState } from "react";
import NavBar from "./pages/NavBar";
import Footer from "./components/Footer";
import Main from "./components/Main";

export default function App() {
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

  const [currentPage, setCurrentPage] = useState("informace");
  const [evidenceList, setEvidenceList] = useState([]);
  const [numberOfContracts, setNumberOfContracts] = useState([]);
  const [registrationInfo, setRegistrationInfo] = useState(
    initialRegistrationInfo
  );

  const [userLogin, setUserLogin] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    controlPassword: "",
  });

  const [emailList, setEmailList] = useState([]);
  const [passwordList, setPasswordList] = useState([]);
  const [showInsuranceTypes, setShowInsuranceTypes] = useState(false);

  function changePage(page) {
    setCurrentPage(page);
    document.title = `Pojišťovna React/${page}`;
  }
  return (
    <div>
      <NavBar
        changePage={changePage}
        isLoggedIn={isLoggedIn}
        loginData={loginData}
        evidenceList={evidenceList}
        setIsLoggedIn={setIsLoggedIn}
        setIsAdmin={setIsAdmin}
        isAdmin={isAdmin}
        setEvidenceList={setEvidenceList}
        setNumberOfContracts={setNumberOfContracts}
        setShowInsuranceTypes={setShowInsuranceTypes}
        showInsuranceTypes={showInsuranceTypes}
        currentPage={currentPage}
      />
      <Main
        currentPage={currentPage}
        registrationInfo={registrationInfo}
        setRegistrationInfo={setRegistrationInfo}
        initialRegistrationInfo={initialRegistrationInfo}
        evidenceList={evidenceList}
        setEvidenceList={setEvidenceList}
        numberOfContracts={numberOfContracts}
        setCurrentPage={setCurrentPage}
        changePage={changePage}
        setUserLogin={setUserLogin}
        userLogin={userLogin}
        loginData={loginData}
        setLoginData={setLoginData}
        isLoggedIn={isLoggedIn}
        emailList={emailList}
        setEmailList={setEmailList}
        passwordList={passwordList}
        setPasswordList={setPasswordList}
        isAdmin={isAdmin}
        setNumberOfContracts={setNumberOfContracts}
        showInsuranceTypes={showInsuranceTypes}
        setShowInsuranceTypes={setShowInsuranceTypes}
        setIsAdmin={setIsAdmin}
        setIsLoggedIn={setIsLoggedIn}
      />
      <Footer />
    </div>
  );
}
