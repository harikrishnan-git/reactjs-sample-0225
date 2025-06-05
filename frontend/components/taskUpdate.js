import { useEffect, useState } from "react";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../src/firebase";

export default function TaskListDetail(listId) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const taskRef = collection(db, "tasklists", listId, "tasks");
      const snapshot = await getDocs(taskRef);
      setTasks(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    };
    fetchTasks();
  }, [listId]);

  const addTask = async (listId, title, description, date) => {
    try {
      if (!title.trim()) return;
      const docRef = await addDoc(
        collection(db, "tasklists", listId, "tasks"),
        {
          title,
          description,
          date,
          completed: false,
        }
      );
      setTasks((prev) => [
        ...prev,
        { id: docRef.id, title, description, date, completed: false },
      ]);
    } catch (error) {
      console.error("Error adding task: ", error);
    }
  };
  return { tasks, addTask, setTasks };
}
