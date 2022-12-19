import React from "react";

import TotalItems from "./common/total";
import TextButton from "./common/textButton";
import List from "./common/list";
import BtnContainer from "./btnContainer";

function Board({
  length,
  data,
  status,
  onCrossClick,
  onStatusClick,
  onClearClick,
  onCheckClick,
  onDragStart,
  onDragEnter,
  onDragEnd,
}) {
  const footerlabel = ["all", "active", "completed"];

  return (
    <div className="board container">
      <div className="board-body">
        {data.length ? (
          data.map((item, index) => (
            <List
              key={index}
              index={index}
              id={item.id}
              content={item.todo}
              status={item.status}
              onCrossClick={onCrossClick}
              onCheckClick={onCheckClick}
              onDragStart={onDragStart}
              onDragEnter={onDragEnter}
              onDragEnd={onDragEnd}
            />
          ))
        ) : (
          <List id={null} content="No Item Exists" exist={false} />
        )}
      </div>
      <div className="board-footer flex">
        <TotalItems left={length} />
        <BtnContainer
          labels={footerlabel}
          status={status}
          onStatusClick={onStatusClick}
        />
        <TextButton
          value="Clear Completed"
          classname="clear-btn"
          onClick={onClearClick}
        />
      </div>
    </div>
  );
}

export default Board;
