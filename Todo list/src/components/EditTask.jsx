import { useState } from "react";

export default function EditTask({ task, editedTask }) {
  const [newTask, setNewTask] = useState(task.taskName);

  function handleSubmit(e) {
    e.preventDefault();

    editedTask(newTask, task.id);
  }
  return (
    <form onSubmit={handleSubmit} className="add__task">
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button>save</button>
    </form>
  );
}
