import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import TaskList from "../components/TaskList";
import { usePopupContext } from "../contexts/PopupContext";
import AddTaskPopup from "../components/AddTaskPopup";
import useTaskLists from "../components/useTaskLists";
import AddTaskList from "../components/AddTaskList";
import AddTaskListPopup from "../components/AddTaskListPopup";

export default function Home() {
  const [showListPopup, setShowListPopup] = useState(false);
  const { showPopup } = usePopupContext();
  const { lists } = useTaskLists();

  return (
    <div>
      <Navbar />
      {lists.map((data, index) => (
        <TaskList />
      ))}
      {showPopup && <AddTaskPopup />}
      {showListPopup && (
        <AddTaskListPopup setShowListPopup={setShowListPopup} />
      )}
      <AddTaskList setShowListPopup={setShowListPopup} />
    </div>
  );
}
