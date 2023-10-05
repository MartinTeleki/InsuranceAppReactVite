import React, { useState, useEffect } from "react";
import "./newInformation.css";
import NavBar from "./NavBar";
import Footer from "../components/Footer";

export default function NewInformation({ evidenceList, numberOfContracts }) {
  const informationFromJSON =
    JSON.parse(localStorage.getItem("evidenceTEST")) || [];

  const totalInsuranceAmount = informationFromJSON
    .map((item) => Number(item.insuredAmount))
    .reduce(
      (accumulator, currentValue) =>
        accumulator + (isNaN(currentValue) ? 0 : currentValue),
      0
    );

  const totalContractValue = informationFromJSON
    .map((item) => Number(item.amount))
    .reduce(
      (accumulator, currentValue) =>
        accumulator + (isNaN(currentValue) ? 0 : currentValue),
      0
    );

  const info = {
    numberOfClients: evidenceList.length,
    numberOfContracts: numberOfContracts.length,
    companySetUp: 1996,
    contractValue: totalContractValue,
    discount: 80,
    moneyPayout: 3,
    insuranceAmount: totalInsuranceAmount,
  };

  const styles = {
    textColor: "#a2ff00",
  };

  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [greeting, setGreeting] = useState("");
  const [clientDescription, setClientDescription] = useState("");
  const [contractDescription, setContractDescription] = useState("");
  const [preContractDescription, setPreContractDescription] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    const currentHour = currentDateTime.getHours();

    if (currentHour >= 6 && currentHour < 12) {
      setGreeting("Dobré ráno");
    } else if (currentHour >= 12 && currentHour < 13) {
      setGreeting("Dobré poledne");
    } else if (currentHour >= 13 && currentHour < 18) {
      setGreeting("Dobré odpoledne");
    } else if (currentHour >= 0 && currentHour < 1) {
      setGreeting("Krásnou půlnoc");
    } else {
      setGreeting("Dobrý večer");
    }
  }, [currentDateTime]);

  useEffect(() => {
    if (info.numberOfClients === 1) {
      setClientDescription("klienta");
    } else if (
      info.numberOfClients === 2 ||
      info.numberOfClients === 3 ||
      info.numberOfClients === 4
    ) {
      setClientDescription("klienty");
    } else if (info.numberOfClients >= 5) {
      setClientDescription("klientů");
    }
  }, [info.numberOfClients]);

  useEffect(() => {
    if (info.numberOfContracts === 1) {
      setContractDescription("smlouva");
    } else if (info.numberOfContracts >= 2 && info.numberOfContracts <= 4) {
      setContractDescription("smlouvy");
    } else {
      setContractDescription("smluv");
    }
  }, [info.numberOfContracts]);

  useEffect(() => {
    if (info.numberOfContracts === 1) {
      setPreContractDescription("Byla uzavřena");
    } else if (info.numberOfContracts >= 2 && info.numberOfContracts <= 4) {
      setPreContractDescription("Byly uzavřeny");
    } else {
      setPreContractDescription("Bylo uzavřeno");
    }
  }, [info.numberOfContracts]);

  return (
    <>
      <div className="informace-container">
        <p>
          <span style={{ color: styles.textColor }}>{greeting}</span>, srdečně
          Vás vítáme v naší React pojišťovně, kde jsme pro vás připravili
          jedinečnou cestu k finanční jistotě.
        </p>
        <p>
          {info.numberOfClients > 0 && info.numberOfContracts > 0 ? (
            <>
              Naše pojišťovna již se stará o{" "}
              <span style={{ color: styles.textColor }}>
                {info.numberOfClients}
              </span>{" "}
              {clientDescription}. {`${preContractDescription} `}
              <span style={{ color: styles.textColor }}>
                {info.numberOfContracts}
              </span>
              {` ${contractDescription}.`}
            </>
          ) : (
            <>
              Momentálně nebyla s nikým sjednána smlouva. Buďte prvním klientem
              a získejte pojištění se slevou až{" "}
              <span style={{ color: styles.textColor }}>{info.discount}% </span>
              .
            </>
          )}
        </p>
        <p>
          Jsme pojišťovna s tradicí od roku {info.companySetUp}. Již jsme našim
          klient{info.numberOfClients !== 1 ? "ům" : "ovi"} vyplatili{" "}
          <span style={{ color: styles.textColor }}>{info.contractValue}$</span>
          . Naši klient{info.numberOfClients !== 1 ? "i" : ""} jsou pojištěni
          celkově do výše{" "}
          <span style={{ color: styles.textColor }}>
            {info.insuranceAmount}$
          </span>
          .
        </p>
        <p>
          Pokud hledáte férovou pojišťovnu, která Vám vyplatí nejpozději do{" "}
          <span style={{ color: styles.textColor }}>{info.moneyPayout}.</span>{" "}
          dne vaší pohledávku, jste na správném místě.
        </p>
        <p className="time">
          {" "}
          <span style={{ color: "white" }}> Dnes je: </span>{" "}
          {currentDateTime.toLocaleString()}
        </p>
      </div>
      <Footer />
    </>
  );
}
