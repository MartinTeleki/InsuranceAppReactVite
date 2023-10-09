import React from "react";
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
import { DataUserProvider } from "./contexts/DataUserProvider";


export default function App() {
  return (
    <DataUserProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <>
            <Route index element={<NewInformation />} />
            <Route path="informace" element={<NewInformation />} />
            <Route path="registrace" element={<NewRegister />} />
            <Route path="login" element={<NewLogin />} />
            <Route path="kontakt" element={<NewContact />} />
          </>
          <>
            <Route
              path="/pojisteni"
              element={<ProtectedAdminRoute element={<Pojisteni />} />}
            />

            <Route
              path="/informace-o-pojisteni"
              element={<InsuranceInformation />}
            />

            <Route
              path="pojistenci"
              element={<ProtectedAdminRoute element={<Pojistenci />} />}
            />
            <Route
              path="evidence"
              element={<ProtectedAdminRoute element={<NewEvidence />} />}
            />
          </>
          <Route path="login-jmeno" element={<UserInformation />} />
          <Route path="odhlasit" element={<NavOdhlasit />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </DataUserProvider>
  );
}
