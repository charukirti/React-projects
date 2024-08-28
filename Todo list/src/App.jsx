import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import FilterTask from "./components/FilterTask";
import TaskList from "./components/TaskList";
import Footer from "./components/Footer";
uuidv4();

export default function App() {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      console.log("Retrieved from localStorage:", storedTasks);
      setTasks(JSON.parse(storedTasks));
    } else {
      console.log("No tasks found in localStorage");
    }
  }, []); 

  // Save tasks to local storage whenever tasks state changes
  useEffect(() => {
    console.log("Saving to localStorage:", tasks);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);


  // function for adding task

  function addTask(task) {
    console.log(task);
    setTasks([
      ...tasks,
      { id: uuidv4(), taskName: task, isComplete: false, isEditing: false },
    ]);
    setFilter("all");
  }

  // function for filtering task

  function updateFilter(newFilter) {
    setFilter(newFilter);
  }

  // function for complete task

  function completeTask(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isComplete: !task.isComplete } : task
      )
    );
  }

  // function for editing task

  /* for toggling edit task mode */
  function editTask(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isEditing: !task.isEditing } : task
      )
    );
  }

  /* function to update the edited task name */
  function editedTask(taskName, id) {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, taskName, isEditing: !task.isEditing }
          : task
      )
    );
  }

  // function for deleting task

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  // function for clearing tasks

  function clearTasks() {
    setTasks([]);
  }

  return (
    <div className="container">
      <div className="sub__container">
        <Header />
        <AddTask addTask={addTask} />
        <FilterTask updateFilter={updateFilter} />
      </div>
      <TaskList
        tasks={tasks.filter((task) => {
          if (filter === "all") return true;
          if (filter === "active") return !task.isComplete;
          if (filter === "completed") return task.isComplete;
          return true;
        })}
        completeTask={completeTask}
        deleteTask={deleteTask}
        editedTask={editedTask}
        editTask={editTask}
      />
      <Footer tasks={tasks} clearTasks={clearTasks} />
    </div>
  );
}
