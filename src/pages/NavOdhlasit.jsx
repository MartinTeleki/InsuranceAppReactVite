import React, { useContext } from "react";
import { DataUserContext } from "../contexts/DataUserProvider";

export function NavOdhlasit() {
  const { setIsLoggedIn, setIsAdmin } = useContext(DataUserContext);
  function handleLogout() {
    setIsLoggedIn(false);
    setIsAdmin(false);
  }

  return <div></div>;
}
