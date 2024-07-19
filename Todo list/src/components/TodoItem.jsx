import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function TodoItem({ task }) {
  return (
    <div className="todo__list--item">
      <p>{task.taskName}</p>

      <div className="btn__container">
        <FontAwesomeIcon icon={faPenToSquare} className="btn__container--btn" />
        <FontAwesomeIcon icon={faTrash} className="btn__container--btn" />

        {/* <button className="edit__task">Edit</button>
                <button className="delete__task">Delete</button> */}
      </div>
    </div>
  );
}
