import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import Check from "./common/check";

function Searchbox({ onKeyDown }) {
  return (
    <div className="searchbox container">
      <div className="flex">
        <Check isCheckable={false} />
        <input
          type="text"
          placeholder="Create a new todo..."
          onKeyDown={onKeyDown}
        />
      </div>
    </div>
  );
}

export default Searchbox;
