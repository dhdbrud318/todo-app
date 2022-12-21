import React from "react";
import IconButton from "./common/iconButton";

import moon from "../assets/images/icon-moon.svg";
import sun from "../assets/images/icon-sun.svg";

function Header({ theme, onThemeClick }) {
  const imgSrc = (
    <img
      src={theme === "dark" ? sun : moon}
      alt={`Swtich to the ${theme} theme`}
    />
  );

  return (
    <header className="header">
      <div className="container flex">
        <h1 className="logo">TODO</h1>
        <IconButton
          iconName="theme"
          iconSrc={imgSrc}
          value={theme}
          onClick={onThemeClick}
        />
      </div>
    </header>
  );
}

export default Header;
