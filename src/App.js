import React, { useEffect, useState } from "react";
import "./App.css";

import Header from "./components/header/header.component";
import ItemsList from "./components/items-list/items-list.component";
import CustomInput from "./components/custom-input/custom-input.component";

import { db, createTask } from "./firebase/firebase.utils";

function App(props) {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({
    title: "",
    completed: null,
  });

  useEffect(() => {
    db.collection("todos").onSnapshot((snapShot) => {
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
    newTask.title &&
      (await createTask({
        title: newTask.title,
      }));
    setNewTask({
      title: "",
      completed: null,
    });
  };

  const handleChange = (e) => {
    setNewTask({
      title: e.target.value,
      completed: false,
    });
  };

  const completeTask = (e) => {
    console.log(e.target);
  };

  return (
    <div className="app">
      <Header />
      <form onSubmit={handleSubmit}>
        <CustomInput
          name="add-note"
          placeholder="Create task"
          onChange={handleChange}
          value={newTask.title}
          type="text"
        />
      </form>
      <ItemsList tasks={tasks} completeTask={completeTask} />
    </div>
  );
}

export default App;
