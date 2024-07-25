import AddTask from "./components/AddTask";
import FilterTask from "./components/FilterTask";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import "./App.css";
import Footer from "./components/Footer";

const tasks = [
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
  return (
    <div className="container">
      <div className="sub__container">
        <Header />
        <AddTask />
        <FilterTask />
      </div>
      <TaskList tasks={tasks} />
      <Footer tasks={tasks} />
    </div>
  );
}
