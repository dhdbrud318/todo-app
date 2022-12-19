import React from "react";

import Cross from "./cross";
import Check from "./check";

const List = ({
  id,
  index,
  status,
  content,
  exist = true,
  onCrossClick,
  onCheckClick,
  onDragStart,
  onDragEnter,
  onDragEnd,
}) => {
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
        {exist && <Cross onClick={onCrossClick} index={id} />}
      </div>
    </div>
  );
};

export default List;
