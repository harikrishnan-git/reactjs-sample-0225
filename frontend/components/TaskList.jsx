import React, { useState } from "react";
import AddButton from "./AddButton";
import TaskListHeader from "./TaskListHeader";
import TaskItem from "./TaskItem";
import taskUpdate from "./taskUpdate";

export default function TaskList({ data }) {
  const { tasks, setTasks } = taskUpdate(data.id);
  const pending = tasks.filter((task) => !task.completed);
  const completed = tasks.filter((task) => task.completed);
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 m-4 w-1/4 min-w-[300px]">
      <TaskListHeader title={data.name} />
      <div className="">
        <AddButton listId={data.id} />
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
