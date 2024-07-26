import Header from "./components/Header";
import AddTask from "./components/AddTask";
import FilterTask from "./components/FilterTask";
import TaskList from "./components/TaskList";
import Footer from "./components/Footer";
import "./App.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import EditTask from "./components/EditTask";
uuidv4();

const task = [
  { id: 1, taskName: "Order Food", isComplete: false, isEditing: false },
  { id: 2, taskName: "Learn React", isComplete: false, isEditing: false },
  { id: 3, taskName: "Read Book", isComplete: true, isEditing: false },
  { id: 4, taskName: "Post Tweet", isComplete: false, isEditing: false },
  { id: 5, taskName: "Drink Water", isComplete: false, isEditing: false },
  //   { id: 6, taskName: "Eat Food", isComplete: false, isEditing: false },
  //   { id: 7, taskName: "Eat Food", isComplete: false, isEditing: false },
  //   { id: 8, taskName: "Eat Food", isComplete: false, isEditing: false },
  //   { id: 9, taskName: "Eat Food", isComplete: false, isEditing: false },
  //   { id: 10, taskName: "Eat Food", isComplete: false, isEditing: false },
  //   { id: 11, taskName: "Eat Food", isComplete: false, isEditing: false },
];

export default function App() {
  const [tasks, setTasks] = useState(task);

  // TODO: function for adding task

  function addTask(task) {
    console.log(task);
    setTasks([
      ...tasks,
      { id: uuidv4(), taskName: task, isComplete: false, isEditing: false },
    ]);
  }

  // TODO: function for filtering task

  // TODO: function for complete task

  function completeTask(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isComplete: !task.isComplete } : task
      )
    );
  }

  // TODO: function for editing task

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

  // TODO: function for deleting task

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  // TODO: function for clearing tasks

  function clearTasks() {
    setTasks([]);
  }

  return (
    <div className="container">
      <div className="sub__container">
        <Header />
        <AddTask addTask={addTask} />
        <FilterTask />
      </div>
      <TaskList
        tasks={tasks}
        completeTask={completeTask}
        deleteTask={deleteTask}
        editedTask={editedTask}
        editTask={editTask}
      />
      <Footer tasks={tasks} clearTasks={clearTasks} />
    </div>
  );
}
