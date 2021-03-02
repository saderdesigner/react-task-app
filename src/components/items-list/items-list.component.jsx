import React, { useEffect, useState } from "react";
import Item from "../item/item.component";
import { db } from "../../firebase/firebase.utils";

// import "./items-list.styles.scss";

const ItemsList = ({ user }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    db.collection("users")
      .doc(user.id)
      .collection("todos")
      .orderBy("createTime", "desc")
      .onSnapshot((snapShot) => {
        setTasks(
          snapShot.docs.map((doc) => {
            return { _id: doc.id, ...doc.data() };
          })
        );
      });
  }, [user]);

  const uid = user.id;
  return (
    <div className="items-list-container">
      {tasks.map(({ title, completed, _id }, index) => {
        return (
          <Item
            key={index}
            title={title}
            completed={completed}
            taskId={_id}
            uid={uid}
          />
        );
      })}
    </div>
  );
};

export default ItemsList;
