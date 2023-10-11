import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import "./newRegister.css";
import React, { useContext, useState } from "react";
import { DataUserContext } from "../contexts/DataUserProvider";

export default function NewRegister() {
  const {
    setRegistrationInfo,
    setEvidenceList,
    setNumberOfContracts,
    registrationInfo,
    evidenceList,
    createUser,
  } = useContext(DataUserContext);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [age, setAge] = useState("");
  const [password, setPassword] = useState("");
  const [controlPassword, setControlPassword] = useState("");
  const [city, setCity] = useState("");
  const [insuranceNumber, setInsuranceNumber] = useState("");
  const [insuranceCode, setInsuranceCode] = useState("");
  const [gender, setGender] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

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

      setInsuranceCode(finalFormattedCode);
    } else {
      if (name === "firstName") {
        setFirstName(value);
      } else if (name === "lastName") {
        setLastName(value);
      } else if (name === "email") {
        setEmail(value);
      } else if (name === "phoneNumber") {
        setPhoneNumber(value);
      } else if (name === "age") {
        setAge(value);
      } else if (name === "password") {
        setPassword(value);
      } else if (name === "controlPassword") {
        setControlPassword(value);
      } else if (name === "city") {
        setCity(value);
      } else if (name === "insuranceNumber") {
        setInsuranceNumber(value);
      } else if (name === "gender") {
        setGender(value);
      } else if (name === "termsAccepted") {
        setTermsAccepted(checked);
      }
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
    if (!/^[A-Za-z]+$/.test(firstName) || !/^[A-Za-z]+$/.test(lastName)) {
      alert("Jméno a příjmení nesmí obsahovat pouze speciální znaky.");
      return;
    }

    if (phoneNumber.trim() !== "") {
      if (isNaN(phoneNumber) || phoneNumber.length > 9) {
        alert("Telefonní číslo může obsahovat maximálně 9 čísel.");
        return;
      }

      const phoneNumberRegistration = phoneNumber;
      const person = evidenceList.find(
        (osoba) => osoba.phoneNumber === phoneNumberRegistration
      );

      if (person) {
        alert("Telefonní číslo je již používáno.");
        return;
      }
    }

    if (email.trim() !== "") {
      if (
        /\s/.test(email) ||
        !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email)
      ) {
        alert("Email nesmí obsahovat mezery a musí být ve správném formátu.");
        return;
      }
      const emailRegistration = email;
      const person = evidenceList.find(
        (osoba) => osoba.email === emailRegistration
      );

      if (person) {
        alert("E-mail je již registrován.");
        return;
      }
    }

    if (age < 18 || age > 125) {
      alert("Věk musí být nejméně 18 let a nejvíce 125 let");
      return;
    }

    if (isNaN(age)) {
      alert("Věk musí být číslo");
      return;
    }

    if (age === "") {
      alert("Věk nesmí obsahovat mezery");
      return;
    }

    if (insuranceNumber.length !== 10) {
      alert("Číslo pojišťovací smlouvy musí být dlouhé 10 znaků.");
      return;
    }

    if (isNaN(insuranceNumber)) {
      alert("Pojišťovací číslo obsahuje pouze čísla od 0-9");
      return;
    }

    if (insuranceCode.length > 14 || /\s/.test(insuranceCode)) {
      alert(
        "Kód pojištění nesmí obsahovat mezery a může mít maximálně 14 znaků."
      );
      return;
    }

    if (!termsAccepted) {
      alert(
        "Musíte potvrdit podmínky, než budete moci pokračovat v registraci."
      );
      return;
    }

    const uniqueId = generateUniqueId();
    navigate("/login");
    const newRegistration = {
      firstName,
      lastName,
      email,
      phoneNumber,
      age,
      password,
      controlPassword,
      city,
      insuranceNumber,
      insuranceCode,
      gender,
      termsAccepted,
      id: uniqueId,
    };

    createUser(newRegistration);

    existingEvidence.push(newRegistration);
    localStorage.setItem("evidenceTEST", JSON.stringify(existingEvidence));
    updateLocalStorageData();
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhoneNumber("");
    setAge("");
    setPassword("");
    setControlPassword("");
    setCity("");
    setInsuranceNumber("");
    setInsuranceCode("");
    setGender("");
    setTermsAccepted(false);
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
                value={firstName}
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
                value={lastName}
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
                value={phoneNumber}
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
                value={email}
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
                value={password}
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
                value={controlPassword}
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
                value={age}
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
                value={insuranceNumber}
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
                value={insuranceCode}
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
                value={city}
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
              value={gender}
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
              checked={termsAccepted}
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
