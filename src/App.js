import React, { useEffect, useState } from "react";
import "./App.css";

import Header from "./components/header/header.component";
import ItemsList from "./components/items-list/items-list.component";
import CustomInput from "./components/custom-input/custom-input.component";
import Nav from "./components/nav/nav.component";

import {
  createTask,
  auth,
  createUserProfileDocument,
} from "./firebase/firebase.utils";
import firebase from "firebase/app";

function App(props) {
  // const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [user, setUser] = useState({});

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          setUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setUser({});
      }

      return () => {
        unsubscribe();
      };
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // newTask.title && setTasks([...tasks, newTask]);
    newTask &&
      (await createTask({
        uid: user.id,
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
      <Nav currentUser={user} />
      <Header />
      {Object.keys(user).length !== 0 && (
        <div>
          <form onSubmit={handleSubmit}>
            <CustomInput
              name="add-note"
              placeholder="Create task"
              onChange={handleChange}
              value={newTask}
              type="text"
            />
          </form>
          <ItemsList user={user} />
        </div>
      )}
    </div>
  );
}

export default App;
