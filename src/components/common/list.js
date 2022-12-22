import React from "react";

import Check from "./check";
import IconButton from "./iconButton";

import cross from "../../assets/images/icon-cross.svg";

const List = ({
  id,
  index,
  status,
  content,
  exist,
  onCrossClick,
  onCheckClick,
  onDragStart,
  onDragEnter,
  onDragEnd,
}) => {
  const crossSrc = <img src={cross} alt="Cross Button" />;

  return (
    <div
      className="list"
      draggable
      onDragStart={(e) => onDragStart(e, index)}
      onDragEnter={(e) => onDragEnter(e, index)}
      onDragEnd={onDragEnd}
      index={index}
    >
      <div className="list-container flex">
        {exist && <Check status={status} onClick={onCheckClick} id={id} />}
        <p
          className={
            status === "completed" ? "list-content completed" : "list-content"
          }
        >
          {content}
        </p>
        {exist && (
          <IconButton
            iconName="cross"
            iconSrc={crossSrc}
            onClick={onCrossClick}
            value={id}
          />
        )}
      </div>
    </div>
  );
};

List.defaultProps = {
  exist: true,
};

export default List;
