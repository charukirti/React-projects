import Task from "./Task";

export default function TaskList ({tasks}){
    return (
        <section className="task__list">
            {tasks.map((task) => <Task task = {task} key={task.id}/>)}
        </section>
    )
}

