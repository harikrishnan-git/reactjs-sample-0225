import { useEffect, useState } from "react";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../firebase";

function TaskListDetail({ listId }) {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState("");

  useEffect(() => {
    const fetchTasks = async () => {
      const taskRef = collection(db, "tasklists", listId, "tasks");
      const snapshot = await getDocs(taskRef);
      setTasks(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    };
    fetchTasks();
  }, [listId]);

  const addTask = async (listId) => {
    if (!taskText.trim()) return;
    const docRef = await addDoc(collection(db, "tasklists", listId, "tasks"), {
      title: taskText,
      completed: false,
    });
    setTasks((prev) => [
      ...prev,
      { id: docRef.id, title: taskText, completed: false },
    ]);
    setTaskText("");
  };
}
