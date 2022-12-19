import React from "react";

import cross from "../../assets/images/icon-cross.svg";

function Cross({ index, onClick }) {
  return (
    <button className="cross-btn flex" onClick={onClick} value={index}>
      <img src={cross} alt="Clear Button" />
    </button>
  );
}

export default Cross;
