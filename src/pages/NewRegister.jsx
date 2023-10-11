import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import "./newRegister.css";
import React, { useContext } from "react";
import { DataUserContext } from "../contexts/DataUserProvider";

export default function NewRegister() {
  const {
    setRegistrationInfo,
    setEvidenceList,
    setNumberOfContracts,
    registrationInfo,
    evidenceList,
  } = useContext(DataUserContext);

  const initialRegistrationInfo = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    age: "",
    password: "",
    controlPassword: "",
    city: "",
    insuranceNumber: "",
    insuranceCode: "",
    gender: "",
    termsAccepted: false,
  };

  const navigate = useNavigate();

  function generateUniqueId() {
    const timestamp = new Date().getTime();
    return `user_${timestamp}`;
  }

  function HandleInputChange(e) {
    const { name, value, type, checked } = e.target;

    if (name === "insuranceCode") {
      const cleanCode = value.replace(/[-\s]+/g, "");
      const formattedCode = cleanCode.replace(/(.{4})/g, "$1-");
      const finalFormattedCode = formattedCode.slice(0, 14);

      setRegistrationInfo((prevInfo) => ({
        ...prevInfo,
        [name]: finalFormattedCode,
      }));
    } else {
      setRegistrationInfo((prevInfo) => ({
        ...prevInfo,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  }

  const updateLocalStorageData = () => {
    const storedEvidence =
      JSON.parse(localStorage.getItem("evidenceTEST")) || [];
    setEvidenceList(storedEvidence);
    setNumberOfContracts(storedEvidence);
  };

  function HandleRegisterButton(e) {
    e.preventDefault();

    const existingEvidence =
      JSON.parse(localStorage.getItem("evidenceTEST")) || [];

    // Validace
    if (
      !/^[A-Za-z]+$/.test(registrationInfo.firstName) ||
      !/^[A-Za-z]+$/.test(registrationInfo.lastName)
    ) {
      alert("Jméno a příjmení nesmí obsahovat pouze speciální znaky.");
      return;
    }

    if (registrationInfo.phoneNumber.trim() !== "") {
      if (
        isNaN(registrationInfo.phoneNumber) ||
        registrationInfo.phoneNumber.length > 9
      ) {
        alert("Telefonní číslo může obsahovat maximálně 9 čísel.");
        return;
      }

      const phoneNumberRegistration = registrationInfo.phoneNumber;
      const person = evidenceList.find(
        (osoba) => osoba.phoneNumber === phoneNumberRegistration
      );

      if (person) {
        alert("Telefonní číslo je již používáno.");
        return;
      }
    }

    if (registrationInfo.email.trim() !== "") {
      if (
        /\s/.test(registrationInfo.email) ||
        !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(
          registrationInfo.email
        )
      ) {
        alert("Email nesmí obsahovat mezery a musí být ve správném formátu.");
        return;
      }
      const emailRegistration = registrationInfo.email;
      const person = evidenceList.find(
        (osoba) => osoba.email === emailRegistration
      );

      if (person) {
        alert("E-mail je již registrován.");
        return;
      }
    }

    if (registrationInfo.age < 18 || registrationInfo.age > 125) {
      alert("Věk musí být nejméně 18 let a nejvíce 125 let");
      return;
    }

    if (isNaN(registrationInfo.age)) {
      alert("Věk musí být číslo");
      return;
    }

    if (registrationInfo.age === "") {
      alert("Věk nesmí obsahovat mezery");
      return;
    }

    if (registrationInfo.insuranceNumber.length !== 10) {
      alert("Číslo pojišťovací smlouvy musí být dlouhé 10 znaků.");
      return;
    }

    if (isNaN(registrationInfo.insuranceNumber)) {
      alert("Pojišťovací číslo obsahuje pouze čísla od 0-9");
      return;
    }

    if (
      registrationInfo.insuranceCode.length > 14 ||
      /\s/.test(registrationInfo.insuranceCode)
    ) {
      alert(
        "Kód pojištění nesmí obsahovat mezery a může mít maximálně 14 znaků."
      );
      return;
    }

    if (!registrationInfo.termsAccepted) {
      alert(
        "Musíte potvrdit podmínky, než budete moci pokračovat v registraci."
      );
      return;
    }

    const uniqueId = generateUniqueId();
    navigate("/login");
    const newRegistration = {
      ...registrationInfo,
      id: uniqueId,
    };

    existingEvidence.push(newRegistration);
    localStorage.setItem("evidenceTEST", JSON.stringify(existingEvidence));
    updateLocalStorageData();
    setRegistrationInfo(initialRegistrationInfo);
    alert("Registrace byla úspěšně odeslána!");
  }

  return (
    <>
      <div className="container">
        <form method="post" autoComplete="on">
          {/* First name */}
          <div className="box">
            <div className="register-title">
              <h2>Register</h2>
            </div>
            <label htmlFor="firstName" className="fl fontLabel">
              {" "}
              First Name:{" "}
            </label>
            <div className="new iconBox">
              <i className="fa fa-user" aria-hidden="true"></i>
            </div>
            <div className="fr">
              <input
                type="text"
                name="firstName"
                placeholder="Jan"
                autoFocus="on"
                required
                className="textBox"
                value={registrationInfo.firstName}
                onChange={HandleInputChange}
              />
            </div>
            <div className="clr"></div>
          </div>
          {/* First name */}
          {/* Second name */}
          <div className="box">
            <label htmlFor="last-name" className="fl fontLabel">
              {" "}
              Last Name:{" "}
            </label>
            <div className="fl iconBox">
              <i className="fa fa-user" aria-hidden="true"></i>
            </div>
            <div className="fr">
              <input
                type="text"
                required
                name="lastName"
                placeholder="Novák"
                className="textBox"
                value={registrationInfo.lastName}
                onChange={HandleInputChange}
              />
            </div>
            <div className="clr"></div>
          </div>
          {/* Second name */}
          {/* Phone No. */}
          <div className="box">
            <label htmlFor="phone" className="fl fontLabel">
              {" "}
              Phone No.:{" "}
            </label>
            <div className="fl iconBox">
              <i className="fa fa-phone-square" aria-hidden="true"></i>
            </div>
            <div className="fr">
              <input
                type="text"
                required
                name="phoneNumber"
                maxLength="10"
                placeholder="Phone No."
                className="textBox"
                value={registrationInfo.phoneNumber}
                onChange={HandleInputChange}
              />
            </div>
            <div className="clr"></div>
          </div>
          {/* Phone No. */}
          {/* Email ID */}
          <div className="box">
            <label htmlFor="email" className="fl fontLabel">
              {" "}
              Email ID:{" "}
            </label>
            <div className="fl iconBox">
              <i className="fa fa-envelope" aria-hidden="true"></i>
            </div>
            <div className="fr">
              <input
                type="email"
                required
                name="email"
                placeholder="jannovak@seznam.cz"
                className="textBox"
                value={registrationInfo.email}
                onChange={HandleInputChange}
              />
            </div>
            <div className="clr"></div>
          </div>
          {/* Email ID */}
          {/* Password */}
          <div className="box">
            <label htmlFor="password" className="fl fontLabel">
              {" "}
              Password{" "}
            </label>
            <div className="fl iconBox">
              <i className="fa fa-key" aria-hidden="true"></i>
            </div>
            <div className="fr">
              <input
                type="password"
                required
                name="password"
                placeholder="*******"
                className="textBox"
                value={registrationInfo.password}
                onChange={HandleInputChange}
              />
            </div>
            <div className="clr"></div>
          </div>
          {/* Password */}
          {/* Repassword */}
          <div className="box">
            <label htmlFor="controlPassword" className="fl fontLabel">
              {" "}
              Re-Password:{" "}
            </label>
            <div className="fl iconBox">
              <i className="fa fa-key" aria-hidden="true"></i>
            </div>
            <div className="fr">
              <input
                type="password"
                required
                name="controlPassword"
                placeholder="*******"
                className="textBox"
                value={registrationInfo.controlPassword}
                onChange={HandleInputChange}
              />
            </div>
            <div className="clr"></div>
          </div>
          {/* Repassword */}
          {/* Age */}
          <div className="box">
            <label htmlFor="age" className="fl fontLabel">
              {" "}
              Age:{" "}
            </label>
            <div className="fl iconBox">
              <i className="fa fa-user" aria-hidden="true"></i>
            </div>
            <div className="fr">
              <input
                type="text"
                required
                name="age"
                placeholder="26"
                className="textBox"
                value={registrationInfo.age}
                onChange={HandleInputChange}
              />
            </div>
            <div className="clr"></div>
          </div>
          {/* Age */}
          {/*insurance policy number */}
          <div className="box">
            <label htmlFor="insuranceNumber" className="fl fontLabel">
              {" "}
              insur.Num:{" "}
            </label>
            <div className="fl iconBox">
              <i className="fa fa-envelope" aria-hidden="true"></i>
            </div>
            <div className="fr">
              <input
                type="text"
                required
                name="insuranceNumber"
                placeholder="1234567890"
                className="textBox"
                value={registrationInfo.insuranceNumber}
                onChange={HandleInputChange}
              />
            </div>
            <div className="clr"></div>
          </div>
          {/* insurance policy number */}
          {/* insurance policy code */}
          <div className="box">
            <label htmlFor="insuranceCode" className="fl fontLabel">
              {" "}
              Insur.Code:{" "}
            </label>
            <div className="fl iconBox">
              <i className="fa fa-key" aria-hidden="true"></i>
            </div>
            <div className="fr">
              <input
                type="text"
                required
                name="insuranceCode"
                placeholder="45e87rsd6"
                className="textBox"
                value={registrationInfo.insuranceCode}
                onChange={HandleInputChange}
              />
            </div>
            <div className="clr"></div>
          </div>
          {/* insurance policy code */}
          {/* City */}
          <div className="box">
            <label htmlFor="city" className="fl fontLabel">
              {" "}
              City:{" "}
            </label>
            <div className="fl iconBox">
              <i className="fa fa-key" aria-hidden="true"></i>
            </div>
            <div className="fr">
              <input
                type="text"
                required
                name="city"
                placeholder="City Name"
                className="textBox"
                value={registrationInfo.city}
                onChange={HandleInputChange}
              />
            </div>
            <div className="clr"></div>
          </div>
          {/* City */}
          {/* Gender */}
          <div className="box radio">
            <label htmlFor="gender" className="fl fontLabel">
              {" "}
              Gender:{" "}
            </label>
            <div className="fl iconBox">
              <i className="fa fa-user" aria-hidden="true"></i>
            </div>
            <select
              className="select-gender"
              name="gender"
              required
              onChange={HandleInputChange}
            >
              <option value="">Select your gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          {/* Gender */}
          {/* Terms and Conditions */}
          <div className="box terms">
            <input
              type="checkbox"
              name="termsAccepted"
              required
              checked={registrationInfo.termsAccepted}
              onChange={HandleInputChange}
            />{" "}
            &nbsp; I accept the terms and conditions
          </div>
          {/* Terms and Conditions */}
          {/* Ĺogin */}
          <div className="swap-login">
            <p style={{ color: "#fff" }}>
              Do you have already registered ?{" "}
              <Link
                to="/login"
                className="btn-login-swap"
                style={{ color: "#2496ff", textDecoration: "none" }}
              >
                <span
                  onClick={() => {
                    updateLocalStorageData();
                  }}
                >
                  <strong>Login</strong>
                </span>
              </Link>
            </p>
          </div>
          {/* Ĺogin */}
          {/* Submit Button */}
          <div className="box" style={{ background: "#2d3e3f" }}>
            <input
              type="submit"
              name="Submit"
              className="submit"
              value="Register"
              onClick={HandleRegisterButton}
            />
          </div>
          {/* Submit Button */}
        </form>
      </div>
      <Footer />
    </>
  );
}
