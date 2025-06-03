import React from "react";
import Navbar from "../components/Navbar";
import TaskList from "../components/TaskList";

export default function Home() {
  return (
    <div>
      <Navbar />
      <TaskList />
      <div className="bg-white text-white min-h-screen flex items-center justify-center">
        <p className="text-lg text-gray-400">
          This is the home page. Explore our services and features.
        </p>
      </div>
    </div>
  );
}
