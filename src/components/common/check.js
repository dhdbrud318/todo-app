import React from "react";

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
        <CheckIcon
          className={
            status === "completed" ? "check-icon" : "check-icon invisible"
          }
        />
      </div>
    </button>
  );
}

export default Check;
