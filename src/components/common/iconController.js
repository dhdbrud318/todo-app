import React from "react";

function IconController({ classname, attr, onclick }) {
  return (
    <button onClick={onclick} className={classname}>
      {attr}
    </button>
  );
}

export default IconController;
