import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA7vzleomr7Dz9wxVf8-LafhmteuQNCe-A",
  authDomain: "task-app-d76ee.firebaseapp.com",
  projectId: "task-app-d76ee",
  storageBucket: "task-app-d76ee.appspot.com",
  messagingSenderId: "338240483157",
  appId: "1:338240483157:web:e5058c8e10bb4d7d90c9dc",
};

const createTask = async ({ title, createTime }) => {
  const newTask = {
    title: title,
    completed: false,
    createTime: createTime,
  };
  const taskRef = db.collection("todos");
  console.log(taskRef);
  try {
    await taskRef.add(newTask);
  } catch (error) {
    console.log("Create task error: ", error.massage);
  }
  return newTask;
};

const firebaseApp = firebase.initializeApp(config);

const db = firebaseApp.firestore();

export { db, createTask };
