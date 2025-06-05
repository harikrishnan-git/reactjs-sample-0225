import { useEffect, useState } from "react";
import {
  collection,
  query,
  where,
  onSnapshot,
  addDoc,
} from "firebase/firestore";
import { auth, db } from "../src/firebase";

export default function useTaskLists() {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    if (!auth.currentUser) return;

    const q = query(
      collection(db, "tasklists"),
      where("userId", "==", auth.currentUser.uid)
    );

    // Real-time listener
    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        setLists(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      },
      (error) => {
        console.error("Failed to get real-time tasklists:", error);
      }
    );

    // Cleanup listener on unmount
    return () => unsubscribe();
  }, []);

  const addList = async (title) => {
    try {
      if (!title.trim()) return;
      await addDoc(collection(db, "tasklists"), {
        name: title,
        userId: auth.currentUser.uid,
      });
      // No need to manually update setLists here,
      // onSnapshot will catch the change and update automatically
    } catch (error) {
      console.log(error);
    }
  };

  return {
    addList,
    lists,
  };
}
