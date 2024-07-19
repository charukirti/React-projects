// child component aka task chi list

import TodoItem from "./TodoItem";

export default function TodoList({ tasks }) {
  return (
    <section className="todo__list">
      {tasks.map((task) => (
        <TodoItem key={task.id} task={task} />
      ))}
    </section>
  );
}
