import React from "react";

export default function TaskItem({ task, tasks, setTasks, index }) {
  return (
    <div className="flex justify-start items-center m-2" key={index}>
      <li
        key={index}
        className="w-full text-sm text-gray-700 dark:text-gray-300"
      >
        <div className="flex">
          <input
            id="link-checkbox"
            type="checkbox"
            checked={task.completed}
            onChange={() => {
              const updatedTasks = tasks.map((t) =>
                t.id === task.id ? { ...t, completed: !t.completed } : t
              );
              setTasks(updatedTasks);
            }}
            className="mt-2 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <div className="mx-auto">
            <label
              htmlFor="link-checkbox"
              className="font-bold text-lg mx-auto ms-2 text-gray-900 dark:text-gray-300"
            >
              {task.task}.
            </label>
          </div>
        </div>
        <p className="pl-8 text-gray-300 text-sm mx-auto ms-2">
          {task.details}
        </p>
        <div className="flex text-red-600 font-semibold">
          <div className="bg-amber-300 w-fit mx-auto px-1 rounded-md">
            <h5>{task.date}</h5>
          </div>
        </div>
      </li>
    </div>
  );
}
