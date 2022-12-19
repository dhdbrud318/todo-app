import React from "react";
import moon from "../assets/images/icon-moon.svg";

function Header() {
  return (
    <header className="header">
      <div className="container flex">
        <h1 className="logo">TODO</h1>
        <img src={moon} aria-hidden="true" alt="Moon Icon" />
      </div>
    </header>
  );
}

export default Header;
