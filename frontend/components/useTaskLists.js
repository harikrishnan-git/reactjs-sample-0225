import { useEffect, useState } from "react";
import { collection, query, where, getDocs, addDoc } from "firebase/firestore";
import { auth, db } from "../src/firebase";

export default function useTaskLists() {
  const [lists, setLists] = useState([]);

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

  const addList = async (title) => {
    try {
      if (!title.trim()) return;
      const docRef = await addDoc(collection(db, "tasklists"), {
        name: title,
        userId: auth.currentUser.uid,
      });
      setLists((prev) => [...prev, { id: docRef.id, name: title }]);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    addList,
    lists,
  };
}
