import React, { useState } from "react";
import AddButton from "./AddButton";
import TaskListHeader from "./TaskListHeader";
import TaskItem from "./TaskItem";
import useTaskLists from "./useTaskLists";

export default function TaskList() {
  const [tasks, setTasks] = useState([
    { id: 1, task: "Nothing", details: "hello", date: "25", completed: false },
    { id: 2, task: "Something", details: "world", date: "26", completed: true },
    { id: 3, task: "Anything", details: "foo", date: "27", completed: false },
  ]);
  const pending = tasks.filter((task) => !task.completed);
  const completed = tasks.filter((task) => task.completed);
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 m-4 w-1/4 min-w-[300px]">
      <TaskListHeader />
      <div className="">
        <AddButton />
        {tasks.length === 0 ? (
          <br />
        ) : (
          <ul className="">
            {pending.map((task, index) => (
              <TaskItem
                key={task.id}
                task={task}
                index={index}
                setTasks={setTasks}
                tasks={tasks}
              />
            ))}
            {completed.map((task, index) => (
              <TaskItem
                key={task.id}
                task={task}
                index={index}
                setTasks={setTasks}
                tasks={tasks}
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
