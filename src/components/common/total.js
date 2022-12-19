import React from "react";

const TotalItems = ({ left }) => {
  return (
    <p className="total">
      {" "}
      <span className="total-item">{left}</span> items left
    </p>
  );
};

export default TotalItems;
