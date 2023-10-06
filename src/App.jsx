import React, { useState, useEffect } from "react";
import NavBar from "./pages/NavBar";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewInformation from "./pages/NewInformation";
import NewRegister from "./pages/NewRegister";
import NewLogin from "./pages/NewLogin";
import NewContact from "./pages/NewContact";
import Pojistenci from "./pages/Pojistenci";
import Pojisteni from "./pages/Pojisteni";
import NewEvidence from "./pages/NewEvidence";
import InsuranceInformation from "./pages/InsuranceInformation";
import { NavOdhlasit } from "./pages/NavOdhlasit";
import UserInformation from "./pages/UserInformation";
import ProtectedAdminRoute from "./pages/ProtectedRoute";
import PageNotFound from "./pages/PageNotFound";

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
    const storedEvidence =
      JSON.parse(localStorage.getItem("evidenceTEST")) || [];
    setEvidenceList(storedEvidence);
  }, []);

  return (
    <BrowserRouter>
      <NavBar
        isLoggedIn={isLoggedIn}
        loginData={loginData}
        evidenceList={evidenceList}
        setIsLoggedIn={setIsAdmin}
        setIsAdmin={setIsAdmin}
        setEvidenceList={setEvidenceList}
        setNumberOfContracts={setNumberOfContracts}
        setShowInsuranceTypes={setShowInsuranceTypes}
        showInsuranceTypes={showInsuranceTypes}
        isAdmin={isAdmin}
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
                loginData={loginData}
                setLoginData={setLoginData}
                setIsAdmin={setIsAdmin}
                setIsLoggedIn={setIsLoggedIn}
                isLoggedIn={isLoggedIn}
              />
            }
          />
          <Route path="kontakt" element={<NewContact />} />
        </>
        (
        <>
          <Route
            path="/pojisteni"
            element={
              <ProtectedAdminRoute
                element={
                  <Pojisteni
                    showInsuranceTypes={showInsuranceTypes}
                    setShowInsuranceTypes={setShowInsuranceTypes}
                  />
                }
                isLoggedIn={isLoggedIn}
                isAdmin={isAdmin}
              />
            }
          />

          <Route
            path="/informace-o-pojisteni"
            element={<InsuranceInformation />}
          />

          <Route
            path="pojistenci"
            element={
              <ProtectedAdminRoute
                element={
                  <Pojistenci isLoggedIn={isLoggedIn} isAdmin={isAdmin} />
                }
                isLoggedIn={isLoggedIn}
                isAdmin={isAdmin}
              />
            }
          />
          <Route
            path="evidence"
            element={
              <ProtectedAdminRoute
                element={
                  <NewEvidence
                    evidenceList={evidenceList}
                    setEvidenceList={setEvidenceList}
                    isLoggedIn={isLoggedIn}
                    isAdmin={isAdmin}
                  />
                }
                isLoggedIn={isLoggedIn}
                isAdmin={isAdmin}
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
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
              setIsAdmin={setIsAdmin}
            />
          }
        />
        <Route path="*" element={<PageNotFound />} />)
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
