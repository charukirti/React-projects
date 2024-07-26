import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-regular-svg-icons";

export default function Task({ task, toggleComplete, toggleDelete, toggleEdit }) {
  return (
    <div className="task__list--item">
      <p className={`task__name ${task.isComplete ? "completed" : ""}`}>
        {task.taskName}
      </p>

      <div className="btn__container">
        <FontAwesomeIcon
          icon={faCircleCheck}
          className="btn__container--complete"
          onClick={() => toggleComplete(task.id)}
        />
        <FontAwesomeIcon
          icon={faPenToSquare}
          className="btn__container--edit"
          onClick={() => toggleEdit(task.id)}
        />
        <FontAwesomeIcon
          icon={faTrashCan}
          className="btn__container--delete"
          onClick={() => toggleDelete(task.id)}
        />
      </div>
    </div>
  );
}
