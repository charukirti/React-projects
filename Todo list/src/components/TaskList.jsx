import EditTask from "./EditTask";
import Task from "./Task";

export default function TaskList({
  tasks,
  completeTask,
  deleteTask,
  editedTask,
  editTask,
}) {
  const totalTasks = tasks.length;
  return (
    <section className="task__list">
      {totalTasks > 0 ? (
        tasks.map((task) =>
          task.isEditing ? (
            <EditTask key={task.id} task={task} editedTask={editedTask} />
          ) : (
            <Task
              task={task}
              key={task.id}
              toggleComplete={completeTask}
              toggleDelete={deleteTask}
              toggleEdit={editTask}
            />
          )
        )
      ) : (
        <p className="task__list--text">There is nothing to do :)</p>
      )}
    </section>
  );
}
