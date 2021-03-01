import React from "react";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { db } from "../../firebase/firebase.utils";

import "./item.styles.scss";

const Item = ({ title, completed, _id }) => {
  const deleteTask = async () => {
    try {
      await db.collection("todos").doc(_id).delete();
    } catch (error) {
      console.log(error.message);
    }
  };

  const completeTask = () => {
    const taskRef = db.collection("todos").doc(_id);
    console.log(taskRef);
    try {
      taskRef.update({
        completed: !completed,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="item-container" onClick={completeTask}>
      <div className="icon-container">
        {completed ? (
          <RadioButtonCheckedIcon className="completed" />
        ) : (
          <RadioButtonUncheckedIcon />
        )}
      </div>

      <div className={`title ${completed ? "completed" : ""}`}>{title}</div>
      <div className="del-container">
        <DeleteForeverIcon onClick={deleteTask} />
      </div>
    </div>
  );
};

export default Item;
