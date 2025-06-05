import { useEffect, useState } from "react";
import { collection, getDocs, addDoc, onSnapshot } from "firebase/firestore";
import { db } from "../src/firebase";

export default function useTaskListDetail(listId) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (!listId) return;

    const taskRef = collection(db, "tasklists", listId, "tasks");

    // ✅ Real-time listener
    const unsubscribe = onSnapshot(taskRef, (snapshot) => {
      const taskList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTasks(taskList);
    });

    return () => unsubscribe(); // Cleanup on unmount
  }, [listId]);

  const addTask = async (title, description, date) => {
    try {
      if (!listId) {
        console.error("List ID is required to add a task.");
        return;
      }
      if (!title.trim()) return;

      await addDoc(collection(db, "tasklists", listId, "tasks"), {
        title,
        description,
        date,
        completed: false,
      });
    } catch (error) {
      console.error("Error adding task: ", error);
    }
  };

  return { tasks, setTasks, addTask };
}
