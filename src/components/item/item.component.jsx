import React from "react";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { deleteTask, completeTask } from "../../firebase/firebase.utils";

import "./item.styles.scss";

const Item = ({ title, completed, taskId, uid }) => {
  const deleteTaskHandle = async () => {
    await deleteTask(uid, taskId);
  };

  const completeTaskHandle = async () => {
    await completeTask(uid, taskId, completed);
  };
  return (
    <div className="item-container">
      <div className="icon-container">
        {completed ? (
          <RadioButtonCheckedIcon className="completed" />
        ) : (
          <RadioButtonUncheckedIcon />
        )}
      </div>

      <div
        className={`title ${completed ? "completed" : ""}`}
        onClick={completeTaskHandle}
      >
        {title}
      </div>
      <div className="del-container">
        <DeleteForeverIcon onClick={deleteTaskHandle} />
      </div>
    </div>
  );
};

export default Item;
