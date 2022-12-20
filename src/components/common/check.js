import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle as emptyCircle } from "@fortawesome/free-regular-svg-icons";
import { faCircle as fullCircle } from "@fortawesome/free-solid-svg-icons";

import { ReactComponent as CheckIcon } from "../../assets/images/icon-check.svg";

function Check({ id, status, onClick }) {
  return (
    <button onClick={onClick} value={status} id={id} className="check-btn">
      <div
        className={
          status === "completed"
            ? "check-border flex active"
            : "check-border flex"
        }
      >
        <CheckIcon className="check-icon" />
      </div>
    </button>
  );
}

export default Check;
