import React from "react";

import TextButton from "./common/textButton";

function BtnContainer({ labels, status, onStatusClick }) {
  return (
    <div className="btn-container flex capitalize">
      {labels.map((label, index) => (
        <TextButton
          key={index}
          value={label}
          classname={label === status ? "status-btn active" : "status-btn"}
          onClick={onStatusClick}
        />
      ))}
    </div>
  );
}

export default BtnContainer;
