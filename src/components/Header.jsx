import React, { useContext } from "react";
import HighlightIcon from "@material-ui/icons/Highlight";
import NightsStayOutlinedIcon from "@material-ui/icons/NightsStayOutlined";
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import { DarkModeContext } from "../context/context";

function Header() {
  const { darkMode, dispatch } = useContext(DarkModeContext);
  return (
    <header className={darkMode ? "headerDark" : "header"}>
      <h1>
        <HighlightIcon />
         NotesApp
      </h1>
     { !darkMode ? <span onClick={()=>dispatch({type : "toggle"})}>
        <>Dark Mode</> <NightsStayOutlinedIcon />
      </span> : <span onClick={()=>dispatch({type : "toggle"})}>
        <>Light Mode</> <WbSunnyIcon />
      </span>}
    </header>
  );
}

export default Header;
