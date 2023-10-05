import React from "react";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";
import NavBar from "./NavBar";

export default function InsuranceInformation() {
  const insuranceTypes = {
    type1: "Pojištění osob",
    type2: "Životní pojištění",
    type3: "Cestovní pojištění",
    type4: "Úrazové pojištění",
    type5: "Nemocenské a sociální pojištění",
    type6: "Zdravotní pojištění",
    type7: "Pojištění majetku (zejména budov a nemovitého majetku)",
    type8: "Živelní pojištění",
    type9: "Technická pojištění",
    type10: "Pojištění přerušení provozu",
    type11: "Pojištění proti odcizení či krádeži",
    type12: "Dopravní pojištění",
    type13: "Pojištění vozidel",
    type14: "Pojištění budov",
    type15: "Pojištění podnikání",
    type16: "Pojištění odpovědnosti",
    type17: "Pojištění profesní odpovědnosti",
    type18: "Pojištění odpovědnosti za škodu",
    type19: "Pojištění odpovědnosti při podnikání",
    type20: "Pojištění odpovědnosti zaměstnanců",
    type21: "Pojištění schopnosti splácet",
    type22: "Pojištění právní ochrany",
    type23: "Pojištění finančních ztrát",
    type24: "Pojištění pohledávek",
    type25: "Pojištění odpovědnosti za produkt",
  };
  return (
    <>
      <NavBar />
      <div className="insurance-police-holder-box">
        <span>
          <h2>{insuranceTypes.type1}</h2>
        </span>
        <p>
          {insuranceTypes.type1} poskytuje finanční ochranu pro vás a vaše
          blízké v případě smrti nebo úrazu. Toto pojištění může zahrnovat
          vyplacení dávek pro pozůstalé nebo náhradu za ztrátu příjmu v případě
          invalidity. Je to způsob, jak zajistit, že vaše rodina bude v případě
          nepředvídaných událostí zajištěna.
        </p>
      </div>
      <div className="insurance-police-holder-box">
        <span>
          <h2>{insuranceTypes.type2}</h2>
        </span>
        <p>
          {insuranceTypes.type2} je druhem pojištění osob, který se zaměřuje na
          poskytnutí finanční ochrany v případě smrti pojištěné osoby. Toto
          pojištění může také sloužit jako forma investice a úspor, které mohou
          být využity v budoucnosti nebo předávány dědicům.
        </p>
      </div>
      <div className="insurance-police-holder-box">
        <span>
          <h2>{insuranceTypes.type3}</h2>
        </span>
        <p>
          {insuranceTypes.type3} chrání cestovatele před nepředvídanými
          událostmi během cestování, jako jsou lékařské nouzové případy,
          zpožděné lety, ztráta zavazadel a další rizika spojená s cestováním.
          Toto pojištění vám dává klid a jistotu během dovolené či služebních
          cest.
        </p>
      </div>
      <div className="insurance-police-holder-box">
        <span>
          <h2>{insuranceTypes.type4}</h2>
        </span>
        <p>
          {insuranceTypes.type4} poskytuje finanční kompenzaci v případě úrazu,
          který může vést k trvalé invaliditě nebo smrti. Tato forma pojištění
          může být užitečná pro ty, kteří vykonávají rizikové činnosti, jako je
          sportovní lezení nebo jízda na motorce.
        </p>
      </div>
      <div className="insurance-police-holder-box">
        <span>
          <h2>{insuranceTypes.type5}</h2>
        </span>
        <p>
          {insuranceTypes.type5} poskytuje finanční podporu v případě nemoci
          nebo dočasné pracovní neschopnosti. Toto pojištění může být povinné a
          zajišťuje, že budete mít přístup k základním finančním prostředkům
          během obtížných období.
        </p>
      </div>
      <div className="insurance-police-holder-box">
        <span>
          <h2>{insuranceTypes.type6}</h2>
        </span>
        <p>
          {insuranceTypes.type6} zahrnuje náklady na lékařskou péči, včetně
          návštěv lékaře, léků a nemocničního pobytu. Toto pojištění je klíčové
          pro zajištění přístupu ke kvalitní zdravotní péči bez finanční zátěže.
        </p>
      </div>
      <div className="insurance-police-holder-box">
        <span>
          <h2>{insuranceTypes.type7}</h2> (zejména budov a nemovitého majetku)
        </span>
        <p>
          {insuranceTypes.type7} chrání vaši nemovitost před riziky, jako jsou
          požáry, povodně, krádeže a další škody. To zahrnuje pojištění domů,
          bytů a komerčních nemovitostí.
        </p>
      </div>
      <div className="insurance-police-holder-box">
        <span>
          <h2>{insuranceTypes.type8}</h2>
        </span>
        <p>
          {insuranceTypes.type8} kryje škody způsobené přírodními živly, jako
          jsou povodně, zemětřesení a bouřky. Toto pojištění může být důležité v
          oblastech s vysokým rizikem živelných událostí.
        </p>
      </div>
      <div className="insurance-police-holder-box">
        <span>
          <h2>{insuranceTypes.type9}</h2>
        </span>
        <p>
          {insuranceTypes.type9} pokrývají rizika spojená s technickými
          zařízeními a stroji. Toto pojištění může být důležité pro podniky,
          které závisí na technologii a vybavení.
        </p>
      </div>
      <div className="insurance-police-holder-box">
        <span>
          <h2> {insuranceTypes.type10}</h2>
        </span>
        <p>
          {insuranceTypes.type10} pomáhá podnikům pokrýt ztráty při přerušení
          provozu z důvodu požáru, povodně nebo jiných událostí. To může
          zahrnovat ztrátu příjmu a náklady na obnovu provozu.
        </p>
      </div>
      <div className="insurance-police-holder-box">
        <span>
          <h2>{insuranceTypes.type11}</h2>
        </span>
        <p>
          {insuranceTypes.type11} chrání majetek před ztrátou způsobenou krádeží
          nebo odcizením. To může zahrnovat pojištění domácnosti, vozidel a
          osobních věcí.
        </p>
      </div>
      <div className="insurance-police-holder-box">
        <span>
          <h2>{insuranceTypes.type12}</h2>
        </span>
        <p>
          {insuranceTypes.type12} pokrývá rizika spojená s provozem vozidel. To
          zahrnuje povinné pojištění vozidla a volitelné krytí, jako je
          pojištění proti nehodám a krádeži.
        </p>
      </div>
      <div className="insurance-police-holder-box">
        <span>
          <h2>{insuranceTypes.type13}</h2>
        </span>
        <p>
          {insuranceTypes.type13} poskytuje ochranu pro vozidla, jako jsou
          automobily, motorky a nákladní vozidla. To zahrnuje krytí pro nehody,
          krádeže a další škody na vozidlech.
        </p>
      </div>
      <div className="insurance-police-holder-box">
        <span>
          <h2>{insuranceTypes.type14}</h2>
        </span>
        <p>
          {insuranceTypes.type14} poskytuje ochranu pro budovy a nemovitosti
          před různými riziky, jako jsou požáry, povodně a vandalismus. Toto
          pojištění je důležité pro majitele nemovitostí.
        </p>
      </div>
      <div className="insurance-police-holder-box">
        <span>
          <h2>{insuranceTypes.type15}</h2>
        </span>
        <p>
          {insuranceTypes.type15} chrání podniky před různými riziky, včetně
          odpovědnosti vůči třetím stranám, majetkových škod a dalších hrozeb,
          které by mohly ohrozit podnikání.
        </p>
      </div>
      <div className="insurance-police-holder-box">
        <span>
          <h2>{insuranceTypes.type16}</h2>
        </span>
        <p>
          {insuranceTypes.type16} chrání jednotlivce a podniky před náklady
          spojenými s právními žalobami a nároky na odškodnění. To může
          zahrnovat pojištění proti úrazům nebo škodám způsobeným třetím
          stranám.
        </p>
      </div>
      <div className="insurance-police-holder-box">
        <span>
          <h2>{insuranceTypes.type17}</h2>
        </span>
        <p>
          {insuranceTypes.type17} je určeno pro osoby nebo firmy, které
          poskytují odborné služby. Toto pojištění chrání před náklady spojenými
          s žalobami klientů na chyby nebo neprofesionální chování.
        </p>
      </div>
      <div className="insurance-police-holder-box">
        <span>
          <h2>{insuranceTypes.type18}</h2>
        </span>
        <p>
          {insuranceTypes.type18} poskytuje krytí pro škody, které způsobíte
          třetím stranám. To může zahrnovat škody na majetku nebo úrazy
          způsobené vašimi akcemi.
        </p>
      </div>
      <div className="insurance-police-holder-box">
        <span>
          <h2>{insuranceTypes.type19}</h2>
        </span>
        <p>
          {insuranceTypes.type19} chrání podniky před náklady spojenými s
          právními žalobami a nároky na odškodnění od třetích stran. To může
          zahrnovat škody na majetku, úrazy a další rizika spojená s provozem
          podniku.
        </p>
      </div>
      <div className="insurance-police-holder-box">
        <span>
          <h2>{insuranceTypes.type20}</h2>
        </span>
        <p>
          {insuranceTypes.type20} chrání zaměstnavatele před náklady spojenými s
          úrazy zaměstnanců při práci. To zahrnuje náhrady za lékařskou péči a
          náhradu za ztrátu příjmu zaměstnanců.
        </p>
      </div>
      <div className="insurance-police-holder-box">
        <span>
          <h2>{insuranceTypes.type21}</h2>
        </span>
        <p>
          {insuranceTypes.type21} poskytuje finanční podporu v případě, že
          nejste schopni splácet úvěry nebo hypotéky z důvodu ztráty příjmu.
          Toto pojištění vám může pomoci udržet finanční stabilitu i v těžkých
          časech.
        </p>
      </div>
      <div className="insurance-police-holder-box">
        <span>
          <h2>{insuranceTypes.type22}</h2>
        </span>
        <p>
          {insuranceTypes.type22} poskytuje právní pomoc a krytí nákladů na
          právní služby v případě sporů nebo právních žalob. Toto pojištění vám
          může pomoci hájit svá práva.
        </p>
      </div>
      <div className="insurance-police-holder-box">
        <span>
          <h2> {insuranceTypes.type23}</h2>
        </span>
        <p>
          {insuranceTypes.type23} chrání před ztrátou peněz nebo finančních
          prostředků způsobenou různými událostmi, jako jsou podvody, krádeže
          nebo neplacení dlužníkem.
        </p>
      </div>
      <div className="insurance-police-holder-box">
        <span>
          <h2>{insuranceTypes.type24}</h2>
        </span>
        <p>
          {insuranceTypes.type24} chrání vaše podnikání před ztrátou peněz,
          která vznikne, když vaši dlužníci neplatí své dluhy. Toto pojištění
          vám může pomoci udržet likviditu vašeho podnikání.
        </p>
      </div>
      <div className="insurance-police-holder-box">
        <span>
          <h2>{insuranceTypes.type25}</h2>
        </span>
        <p>
          {insuranceTypes.type25} poskytuje krytí v případě, že vaše produkty
          způsobí zranění nebo škody zákazníkům. To může být důležité pro
          výrobce a prodejce.
        </p>
      </div>
      <Footer />
    </>
  );
}
