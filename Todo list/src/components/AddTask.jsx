import { useState } from "react";

export default function AddTask({ addTask }) {
  const [task, setTask] = useState("");

  // function to handle task
  function handleTaskSubmit(e) {
    e.preventDefault();
    if (task) {
      addTask(task);
      setTask("");
    }
  }
  return (
    <form className="add__task" onSubmit={handleTaskSubmit}>
      <input
        type="text"
        placeholder="what you want to do...?"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button>Add Task</button>
    </form>
  );
}
