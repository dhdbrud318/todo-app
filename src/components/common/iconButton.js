import React from "react";

function IconButton({ iconName, iconSrc, onClick, value }) {
  return (
    <button onClick={onClick} value={value} className={`${iconName}-btn flex`}>
      {iconSrc}
    </button>
  );
}

export default IconButton;
