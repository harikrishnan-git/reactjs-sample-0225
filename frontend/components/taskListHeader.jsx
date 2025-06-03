import React, { useState } from "react";

export default function taskListHeader() {
  const [addTask, setAddTask] = useState(false);
  return (
    <div>
      <div className="flex m-3 justify-content-start items-center">
        <svg
          onClick={() => setAddTask(true)}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="m-1 size-8 text-emerald-500 font-bold hover:text-emerald-600 transition-colors duration-300"
        >
          <path
            fillRule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z"
            clipRule="evenodd"
          />
        </svg>
        <p className="text-gray-400 font-bold text-2xl">Add tasks</p>
      </div>
    </div>
  );
}
