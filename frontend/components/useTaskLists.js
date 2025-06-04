import { useEffect, useState } from "react";
import { collection, query, where, getDocs, addDoc } from "firebase/firestore";
import { auth, db } from "../src/firebase";

export default function useTaskLists() {
  const [lists, setLists] = useState([]);
  const [newList, setNewList] = useState("");

  useEffect(() => {
    const fetchLists = async () => {
      const q = query(
        collection(db, "tasklists"),
        where("userId", "==", auth.currentUser.uid)
      );
      const snapshot = await getDocs(q);
      setLists(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    };
    fetchLists();
  }, []);

  const addList = async () => {
    if (!newList.trim()) return;
    const docRef = await addDoc(collection(db, "tasklists"), {
      name: newList,
      userId: auth.currentUser.uid,
    });
    setLists((prev) => [...prev, { id: docRef.id, name: newList }]);
    setNewList("");
  };

  return {
    addList,
    lists,
  };
}
