import React from "react";
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
