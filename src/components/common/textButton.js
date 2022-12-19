import React from "react";

function TextButton({ classname, value, onClick }) {
  return (
    <input
      className={classname}
      type="button"
      value={value}
      onClick={onClick}
    />
  );
}

export default TextButton;
