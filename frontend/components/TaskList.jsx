import React, { useState } from "react";
import TaskListHeader from "./taskListHeader";
import TaskItem from "./TaskItem";

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
      <div className="flex justify-between m-2">
        <p className="text-sm text-gray-400">My tasks</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 text-gray-400"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
          />
        </svg>
      </div>
      <div className="">
        <TaskListHeader />
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
