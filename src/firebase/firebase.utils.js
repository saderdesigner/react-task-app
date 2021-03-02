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

const createTask = async ({ uid, title, createTime }) => {
  const newTask = {
    title: title,
    completed: false,
    createTime: createTime,
  };
  const taskRef = db.collection("users").doc(uid).collection("todos");
  try {
    await taskRef.add(newTask);
  } catch (error) {
    console.log("Create task error: ", error.massage);
  }
  return newTask;
};

const deleteTask = async (uid, taskId) => {
  try {
    await db
      .collection("users")
      .doc(uid)
      .collection("todos")
      .doc(taskId)
      .delete();
  } catch (error) {
    console.log(error.message);
  }
};
const completeTask = async (uid, taskId, completed) => {
  const taskRef = db
    .collection("users")
    .doc(uid)
    .collection("todos")
    .doc(taskId);
  console.log(taskRef);
  try {
    taskRef.update({
      completed: !completed,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const createUserProfileDocument = async (userAuth) => {
  if (!userAuth) return;

  const userRef = db.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

const firebaseApp = firebase.initializeApp(config);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export { db, createTask, auth, deleteTask, completeTask };
