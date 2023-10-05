import React, { useState } from "react";
import NavBar from "./pages/NavBar";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewInformation from "./pages/NewInformation";
import NewRegister from "./pages/NewRegister";
import NewLogin from "./pages/NewLogin";
import NewContact from "./pages/NewContact";
import Pojistenci from "./pages/Pojistenci";
import Pojisteni from "./pages/Pojisteni";
import NewEvidence from "./pages/evidence";
import InsuranceInformation from "./pages/InsuranceInformation";
import { NavOdhlasit } from "./pages/NavOdhlasit";
import UserInformation from "./pages/UserInformation";

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

  console.log(evidenceList);

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
    <BrowserRouter>
      <NavBar
        changePage={changePage}
        isLoggedIn={isLoggedIn}
        loginData={loginData}
        evidenceList={evidenceList}
        setIsLoggedIn={setIsAdmin}
        setIsAdmin={setIsAdmin}
        setEvidenceList={setEvidenceList}
        setNumberOfContracts={setNumberOfContracts}
        setShowInsuranceTypes={setShowInsuranceTypes}
        showInsuranceTypes={showInsuranceTypes}
        currentPage={currentPage}
      />
      <Routes>
        <>
          <Route
            index
            element={
              <NewInformation
                evidenceList={evidenceList}
                numberOfContracts={numberOfContracts}
              />
            }
          />
          <Route
            path="informace"
            element={
              <NewInformation
                evidenceList={evidenceList}
                numberOfContracts={numberOfContracts}
              />
            }
          />
          <Route
            path="registrace"
            element={
              <NewRegister
                registrationInfo={registrationInfo}
                setRegistrationInfo={setRegistrationInfo}
                changePage={changePage}
                evidenceList={evidenceList}
                setEvidenceList={setEvidenceList}
                setNumberOfContracts={setNumberOfContracts}
              />
            }
          />
          <Route
            path="login"
            element={
              <NewLogin
                changePage={changePage}
                loginData={loginData}
                setLoginData={setLoginData}
                setIsAdmin={setIsAdmin}
                setIsLoggedIn={setIsLoggedIn}
              />
            }
          />
          <Route path="contact" element={<NewContact />} />
        </>
        (
        <>
          <Route
            path="/pojisteni"
            element={
              <Pojisteni
                changePage={changePage}
                showInsuranceTypes={showInsuranceTypes}
                setShowInsuranceTypes={setShowInsuranceTypes}
              />
            }
          />

          <Route
            path="/informace-o-pojisteni"
            element={<InsuranceInformation />}
          />

          <Route path="pojistenci" element={<Pojistenci />} />
          <Route
            path="evidence"
            element={
              <NewEvidence
                evidenceList={evidenceList}
                setEvidenceList={setEvidenceList}
              />
            }
          />
        </>
        <Route
          path="login-jmeno"
          element={
            <UserInformation
              loginData={loginData}
              evidenceList={evidenceList}
            />
          }
        />
        <Route
          path="odhlasit"
          element={
            <NavOdhlasit
              changePage={changePage}
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
              currentPage={currentPage}
              setIsAdmin={setIsAdmin}
            />
          }
        />
        )
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
