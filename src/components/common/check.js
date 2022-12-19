import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle as emptyCircle } from "@fortawesome/free-regular-svg-icons";
import { faCircle as fullCircle } from "@fortawesome/free-solid-svg-icons";

//import circle from "../../assets/images/icon-check.svg";

function Check({ id, status, onClick }) {
  return (
    <button onClick={onClick} value={status} id={id} className="check-btn">
      <FontAwesomeIcon
        className="checkIcon"
        icon={status === "active" ? emptyCircle : fullCircle}
      />
    </button>
  );
}

export default Check;
