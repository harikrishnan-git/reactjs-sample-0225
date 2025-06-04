import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../src/firebase";

const addTask = async (task) => {
  await addDoc(collection(db, "tasks"), task);
};

const getTasks = async () => {
  const snapshot = await getDocs(collection(db, "tasks"));
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};
