import React from "react";
import { useContext } from "react";
import { DarkModeContext } from "../context/context";

function Footer() {
  const year = new Date().getFullYear();
  const {darkMode} = useContext(DarkModeContext)
  return (
    <footer className={darkMode ? "footerDark" : "footer"}>
      <p>Copyright ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
