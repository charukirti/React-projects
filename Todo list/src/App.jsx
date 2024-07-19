import "./App.css";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";

const tasks = [
  { id: 1, taskName: "Drink water", isComplete: false, isEditing: false },
  { id: 2, taskName: "Play Cricket", isComplete: false, isEditing: false },
  { id: 3, taskName: "Learn React", isComplete: true, isEditing: false },
  { id: 2, taskName: "Work on project", isComplete: false, isEditing: false },
  { id: 2, taskName: "Work on project", isComplete: false, isEditing: false },
  { id: 2, taskName: "Work on project", isComplete: false, isEditing: false },
  { id: 2, taskName: "Work on project", isComplete: false, isEditing: false },
  { id: 2, taskName: "Work on project", isComplete: false, isEditing: false },
  {
    id: 2,
    taskName: "Work on projectdsdsdddddddddddddddddderescgrsfffffffffgrrgr",
    isComplete: false,
    isEditing: false,
  },
];

export default function App() {
  return (
    <div className="app">
      <Header />
      <TodoList tasks={tasks} />
      <Footer />
    </div>
  );
}
