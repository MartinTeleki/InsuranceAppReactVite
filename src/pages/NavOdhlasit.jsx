import React from "react";
import { Link } from "react-router-dom";

export function NavOdhlasit({ setIsLoggedIn, setIsAdmin }) {
  function handleLogout() {
    setIsLoggedIn(false);
    setIsAdmin(false);
  }

  return <div></div>;
}
