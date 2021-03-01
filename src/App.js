import React, { useEffect, useState } from "react";
import "./App.css";

import Header from "./components/header/header.component";
import ItemsList from "./components/items-list/items-list.component";
import CustomInput from "./components/custom-input/custom-input.component";

import { db, createTask } from "./firebase/firebase.utils";
import firebase from "firebase/app";

function App(props) {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    db.collection("todos")
      .orderBy("createTime", "desc")
      .onSnapshot((snapShot) => {
        setTasks(
          snapShot.docs.map((doc) => {
            return { _id: doc.id, ...doc.data() };
          })
        );
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // newTask.title && setTasks([...tasks, newTask]);
    newTask &&
      (await createTask({
        title: newTask,
        createTime: firebase.firestore.Timestamp.fromDate(new Date()),
      }));
    setNewTask("");
  };

  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  return (
    <div className="app">
      <Header />
      <form onSubmit={handleSubmit}>
        <CustomInput
          name="add-note"
          placeholder="Create task"
          onChange={handleChange}
          value={newTask}
          type="text"
        />
      </form>
      <ItemsList tasks={tasks} />
    </div>
  );
}

export default App;
