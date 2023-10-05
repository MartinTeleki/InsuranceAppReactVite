import React from "react";
import "./newContact.css";
import NavBar from "./NavBar";
import Footer from "../components/Footer";

export default function NewContact() {
  return (
    <>
    <NavBar/>
    <div className="contact-container">
      <h2 className="contact-title">Kontakt na pojišťovnu</h2>
      <Contact
        name="Jana Nováková"
        phone="774887999"
        email="jananovakova@reactpojistovna.cz"
        />
      <Contact
        name="Buka Zázračná"
        phone="774887998"
        email="bukazazracna@reactpojistovna.cz"
        />
      <Contact
        name="Falka Věčná"
        phone="774887997"
        email="falkavecna@reactpojistovna.cz"
        />
      <Contact
        name="Petra Konečná"
        phone="774887996"
        email="petrakonecna@reactpojistovna.cz"
        />
      <Contact
        name="Jiřina Peřinová"
        phone="774887996"
        email="jirinaperinova@reactpojistovna.cz"
        />
    </div>
    <Footer/>
        </>
  );
}

function Contact({ name, phone, email }) {
  const openEmailClient = (email) => {
    window.location.href = `mailto:${email}`;
  };
  const openPhoneClient = (phone) => {
    window.location.href = `tel:${phone}`;
  };

  return (
    <div className="contact-box">
      <p className="contact-paragraph">
        <span className="fl fontLabel">{name}</span>
        <i
          className="iconBox square-box fa fa-phone-square box-phone-contact"
          onClick={() => openPhoneClient(phone)}
        ></i>
        <span
          className="phone-nummer-contact"
          onClick={() => openPhoneClient(phone)}
        >
          {phone}
        </span>
        <i
          className="iconBox square-box fa fa-envelope box-email-contact"
          onClick={() => openEmailClient(email)}
        ></i>
        <span className="email-contact" onClick={() => openEmailClient(email)}>
          {email}
        </span>
      </p>
    </div>
  );
}
