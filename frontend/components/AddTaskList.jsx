import React from "react";

export default function AddTaskList({ setShowListPopup }) {
  return (
    <button
      onClick={() => {
        setShowListPopup(true);
      }}
      className="fixed bottom-4 right-4 w-20 h-20 bg-black rounded-full flex items-center justify-center cursor-pointer"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="max-w-16 h-16 text-emerald-500 hover:text-emerald-600 transition-colors duration-300"
      >
        <path
          fillRule="evenodd"
          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  );
}
