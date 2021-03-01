import React from "react";
import Item from "../item/item.component";

// import "./items-list.styles.scss";

const ItemsList = ({ tasks, completeTask }) => {
  return (
    <div className="items-list-container">
      {tasks.map(({ title, completed, _id }, index) => {
        return (
          <Item key={index} title={title} completed={completed} _id={_id} />
        );
      })}
    </div>
  );
};

export default ItemsList;
